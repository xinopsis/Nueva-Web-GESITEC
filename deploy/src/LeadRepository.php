<?php
declare(strict_types=1);

/** Guarda leads en un CSV fuera del document root y opcionalmente notifica por correo. */
final class LeadRepository
{
    private const COLUMNS = ['id', 'created_at', 'name', 'email', 'company', 'company_size', 'service', 'source', 'message', 'page', 'ip'];

    public function __construct(private readonly string $dir)
    {
        if (!is_dir($this->dir)) {
            mkdir($this->dir, 0770, true);
        }
    }

    public function save(array $lead): string
    {
        $lead['id'] = bin2hex(random_bytes(8));
        $lead['created_at'] = gmdate('c');
        $file = $this->dir . '/leads.csv';
        $isNew = !is_file($file);
        $fp = fopen($file, 'a');
        if ($fp === false) {
            throw new RuntimeException('No se pudo abrir el almacenamiento de leads.');
        }
        flock($fp, LOCK_EX);
        if ($isNew) {
            fputcsv($fp, self::COLUMNS, ',', '"', '');
        }
        // Evita inyección de fórmulas al abrir el CSV en Excel.
        $row = array_map(
            fn ($c) => preg_match('/^[=+\-@\t\r]/', (string) ($lead[$c] ?? '')) ? "'" . $lead[$c] : (string) ($lead[$c] ?? ''),
            self::COLUMNS,
        );
        fputcsv($fp, $row, ',', '"', '');
        flock($fp, LOCK_UN);
        fclose($fp);
        return $lead['id'];
    }

    public function notify(array $lead, array $mail): void
    {
        if (empty($mail['to'])) {
            return;
        }
        $lines = [];
        foreach (['name' => 'Nombre', 'email' => 'Correo', 'company' => 'Empresa', 'company_size' => 'Tamaño', 'service' => 'Servicio', 'source' => 'Cómo nos conoció', 'page' => 'Página', 'message' => 'Mensaje'] as $k => $label) {
            $lines[] = $label . ': ' . ($lead[$k] ?? '');
        }
        $subject = sprintf('%s %s — %s', $mail['subject_prefix'], $lead['service'], $lead['name']);
        $headers = [
            'From' => $mail['from'],
            'Reply-To' => $lead['email'],
            'Content-Type' => 'text/plain; charset=UTF-8',
        ];
        @mail($mail['to'], '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), $headers);
    }
}
