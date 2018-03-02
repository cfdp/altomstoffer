<?php

namespace Drupal\lexicon_search\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'LexiconSearchResults' block.
 *
 * @Block(
 *  id = "lexicon_search_results",
 *  admin_label = @Translation("Lexicon Search Results"),
 * )
 */
class LexiconSearchResults extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
       '#theme' => 'lexicon_search_results',
       '#attached' => array(
        'library' => array(
          'lexicon_search/lexicon_search',
        ),
      ),
     );
  }

}
