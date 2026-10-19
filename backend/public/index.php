<?php
declare(strict_types=1);

require __DIR__ . '/../src/bootstrap.php';

gst_json(200, ['ok' => true, 'service' => 'gesitec-api', 'endpoints' => ['POST /api/contact.php', 'GET /api/health.php']]);
