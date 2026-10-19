<?php
// Copiar a config/config.php y ajustar. config.php no se versiona.
return [
    // Orígenes que pueden llamar a la API (el frontend Next.js).
    'allowed_origins' => [
        'http://localhost:3000',
        'https://gesitec.pe',
        'https://www.gesitec.pe',
    ],

    // Dónde se guardan los leads (fuera de /public).
    'storage_dir' => __DIR__ . '/../storage',

    // Notificación por correo. Dejar 'to' vacío para desactivar.
    'mail' => [
        'to'   => '', // ej. 'comercial@gesitec.pe'
        'from' => 'web@gesitec.pe',
        'subject_prefix' => '[Web GESITEC]',
    ],

    // Límite de envíos por IP.
    'rate_limit' => [
        'max_requests' => 5,
        'window_seconds' => 600,
    ],
];
