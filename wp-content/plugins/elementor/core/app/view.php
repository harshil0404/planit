<?php
namespace Elementor\Core\App;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * @var App $this
 */


$theme_class = 'dark' === $this->get_elementor_ui_theme_preference() ? 'eps-theme-dark' : '';

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title><?php echo __( 'Elementor', 'elementor' ) . ' ... '; ?></title>
		<base target="_parent">
		<?php wp_print_styles(); ?>
	</head>
	<body class="<?php echo $theme_class; ?>">
		<div id="e-app"></div>
		<?php wp_print_footer_scripts(); ?>
	</body>
</html>
