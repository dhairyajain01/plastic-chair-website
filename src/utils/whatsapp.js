import { companyInfo } from '../data/company';

/**
 * Generate a pre-filled WhatsApp click-to-chat URL
 * @param {Object} options
 * @param {string} [options.productName] - Name of the product
 * @param {string} [options.category] - Product category
 * @param {string} [options.dimensions] - Dimensions string
 * @param {string} [options.selectedColor] - Selected color name
 * @param {string} [options.customMessage] - Explicit custom message
 * @returns {string} Fully encoded WhatsApp URL
 */
export function getWhatsAppUrl({ productName, category, dimensions, selectedColor, customMessage } = {}) {
  const phone = companyInfo.whatsappNumber || "919686278842";
  
  let text = "";
  if (customMessage) {
    text = customMessage;
  } else if (productName) {
    text = `Hello Shri Metro Team,\n\nGreetings!\n\nI am interested in a *bulk order enquiry* for:\n• *Product Style:* ${productName}\n• *Category:* ${category || 'Plastic Moulded Furniture'}\n• *Dimensions:* ${dimensions || 'Standard'}${selectedColor ? `\n• *Preferred Colour:* ${selectedColor}` : ''}\n\nPlease share your wholesale price list, batch availability, and Minimum Order Quantity (MOQ).\n\nThank you!`;
  } else {
    text = `Hello Shri Metro Team,\n\nGreetings!\n\nI visited your official website and would like to enquire about wholesale bulk supply of plastic chairs, tables, and stools for our business.\n\nPlease share your complete product catalogue and bulk wholesale price list.\n\nThank you!`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
