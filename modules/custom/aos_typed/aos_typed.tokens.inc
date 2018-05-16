<?php

/**
 * Implements hook_token_info().
 */
function aos_typed_token_info() {

  $type = [
    'name' => t('Inline text'),
    'description' => t('Text effects and ux improvements.'),
  ];

  $tokens['typed_list'] = [
    'name' => t("Typed list"),
    'description' => t('A typed list effect.'),
  ];

  return [
    'types' => ['text' => $type],
    'tokens' => ['text' => $tokens],
  ];
}

/**
 * Implements hook_tokens().
 */
function aos_typed_tokens($type, $tokens, array $data, array $options, \Drupal\Core\Render\BubbleableMetadata $bubbleable_metadata) {

  $replacements = [];

  if ($type == 'text') {
    foreach ($tokens as $name => $original) {
      if (strpos($name, 'typed_list') !== FALSE) {
        $list = explode(':', $name);
        if (count($list) == 2) {
          $strings = explode('|', $list[1]);
          $typed_strings = '';
          foreach($strings as $string) {
            $typed_strings .= '<span>' . $string  .'</span>';
          }
          $replacements[$original] = \Drupal\Core\Render\Markup::create('<span id="typed"></span><span id="typed-strings">' . $typed_strings . '</span>');
        }
      }
    }
  }
  return $replacements;
}
