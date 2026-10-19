# Despliegue en VPS (FTP)

1. Compilar: `cd frontend && npm run build` → genera `frontend/out/`.
2. Armar `deploy/`: contenido de `frontend/out/` (incluye `.htaccess`, que vive en `frontend/public/`) + `backend/public/api/` en `deploy/public_html/`;
   `backend/src`, `backend/config` y `backend/storage` como hermanos de `public_html`.
   Normalizar permisos antes de subir (algunas imágenes de la web anterior venían con permisos privados y el servidor responde **403 Forbidden**):
   `find deploy -type d -exec chmod 755 {} + && find deploy -type f -exec chmod 644 {} +`
3. Subir por FTP respetando esta estructura:

```
/var/www/gesitec/          (o la carpeta de tu dominio)
├── public_html/           ← raíz web del dominio (DocumentRoot / root)
├── src/                   ← fuera de la raíz web
├── config/config.php      ← fuera de la raíz web (editar mail.to)
└── storage/               ← fuera de la raíz web, con permiso de escritura para PHP
```

Requisitos del VPS: Apache 2.4 o Nginx + PHP 8.1 o superior (con mbstring). No necesita Node.js.

## Nginx (si no usas Apache, el .htaccess no aplica)

```nginx
server {
    server_name gesitec.pe www.gesitec.pe;
    root /var/www/gesitec/public_html;
    index index.html;
    error_page 404 /404.html;

    # URLs antiguas: unidades fuera de /technology y Caligo en su propia web
    location ~ ^/technology/(advisory|security|innova)(/.*)?$ { return 301 /$1$2; }
    location ^~ /caligo { return 301 https://caligo.pe; }
    location ~ ^/clientes/?$ { return 301 /#clientes; }
    # Web anterior
    location = /blog.html { return 301 /blog/; }
    location ~ ^/blog/([a-z0-9-]+)\.html$ { return 301 /blog/$1/; }
    location ~ ^/(advisory|technology|security|innova)\.html$ { return 301 /$1/; }
    location = /index.htm { return 301 /; }

    location / { try_files $uri $uri/ $uri.html =404; }
    location /_next/static/ { expires 1y; add_header Cache-Control "public, immutable"; }
    location ~ ^/api/.+\.php$ {
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;   # ajustar a tu versión
    }
}
```
