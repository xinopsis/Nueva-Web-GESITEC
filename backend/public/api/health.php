<?php
declare(strict_types=1);

require __DIR__ . '/../../src/bootstrap.php';

gst_cors(['GET']);
gst_json(200, ['ok' => true, 'service' => 'gesitec-api', 'php' => PHP_VERSION, 'time' => gmdate('c')]);
