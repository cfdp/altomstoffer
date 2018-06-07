<?php

/**
 * Implements hook_token_info().
 */
function aos_tooltips_token_info() {

  $type = [
    'name' => t('Inline text'),
    'description' => t('Text effects and ux improvements.'),
  ];

  $tokens['tooltip'] = [
    'name' => t("Tooltip"),
    'description' => t('A clickable tooltip.'),
  ];

  return [
    'types' => ['text' => $type],
    'tokens' => ['text' => $tokens],
  ];
}

/**
 * Implements hook_tokens().
 */
function aos_tooltips_tokens($type, $tokens, array $data, array $options, \Drupal\Core\Render\BubbleableMetadata $bubbleable_metadata) {

  $replacements = [];

  if ($type == 'text') {
    foreach ($tokens as $name => $original) {
      if (strpos($name, 'tooltip') !== FALSE) {
        $list = explode(':', $name);
        if (count($list) == 2) {
          $strings = explode('|', $list[1]);
        }
        $replacements[$original] = \Drupal\Core\Render\Markup::create(
          '<span class="tooltip" title="' . $strings[1] . '">' . $strings[0] . '</span>'
        );
      }
    }
  }
  return $replacements;
}
