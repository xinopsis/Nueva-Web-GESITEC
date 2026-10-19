<?php
declare(strict_types=1);

/** Límite simple por IP basado en archivos (suficiente para un formulario de contacto). */
final class RateLimiter
{
    public function __construct(
        private readonly string $dir,
        private readonly int $max,
        private readonly int $window,
    ) {
        if (!is_dir($this->dir)) {
            mkdir($this->dir, 0770, true);
        }
    }

    public function hit(string $key): bool
    {
        $file = $this->dir . '/' . hash('sha256', $key) . '.json';
        $fp = fopen($file, 'c+');
        if ($fp === false) {
            return true; // si no se puede escribir, no bloquear al usuario
        }
        flock($fp, LOCK_EX);
        $now = time();
        $hits = json_decode(stream_get_contents($fp) ?: '[]', true) ?: [];
        $hits = array_values(array_filter($hits, fn ($t) => is_int($t) && $t > $now - $this->window));
        $allowed = count($hits) < $this->max;
        if ($allowed) {
            $hits[] = $now;
        }
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($hits));
        flock($fp, LOCK_UN);
        fclose($fp);
        return $allowed;
    }
}
