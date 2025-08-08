/**
 * Helper function to format date
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Helper function to truncate text
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, length = 100) => {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
};

/**
 * Helper function to create class names conditionally
 * @param {Object} classes - Object with class names as keys and conditions as values
 * @returns {string} - Combined class names
 */
export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

/**
 * Helper function to scroll to element
 * @param {string} id - Element ID to scroll to
 * @param {Object} options - Scroll options
 */
export const scrollToElement = (id, options = { behavior: 'smooth' }) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView(options);
    }
};