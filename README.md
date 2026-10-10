# Week 4: Web Performance and Accessibility

**Project:** Anurag - Frontend Developer Portfolio  
**Internship:** YuvaIntern Frontend Web Developer Internship  
**Technologies:** HTML5, CSS3 and JavaScript

## 1. Project Overview

This project improves a personal portfolio website by focusing on
web performance, semantic HTML, responsive design and accessibility.
The goal is to create a website that is easier to navigate, maintain
and use on different devices.

## 2. Performance Improvements

- Used a system font stack to avoid additional font download requests.
- Used a local CSS file and deferred JavaScript loading.
- Avoided unnecessary external libraries and JavaScript dependencies.
- Used reusable CSS variables to reduce duplicated styling.
- Used efficient CSS selectors and simplified layout rules.
- Used responsive CSS Grid and Flexbox.
- Avoided unnecessary images and large media files.
- Kept the document structure simple and lightweight.

## 3. Accessibility Improvements

- Added the HTML language attribute.
- Used semantic header, nav, main, section and footer elements.
- Added a skip-to-main-content link.
- Used a logical heading hierarchy.
- Added labels to all form controls.
- Added required fields and built-in HTML form validation.
- Used ARIA attributes for the mobile navigation state.
- Used a live status region to announce form feedback.
- Added visible keyboard focus indicators.
- Supported keyboard navigation and the Escape key.
- Respected the user's reduced-motion preference.
- Used readable text, spacing and contrasting interface colors.

## 4. Responsive Design

The webpage adapts to different screen sizes using CSS media queries.
The project uses flexible widths, responsive typography, CSS Grid
and Flexbox. On small screens, the navigation changes into a menu.

## 5. Testing Tools

The following tools can be used to evaluate the project:

1. Google Lighthouse: performance, accessibility, best practices
   and search-engine optimization.
2. WAVE: accessibility errors and contrast-related warnings.
3. axe DevTools: automated accessibility checks.
4. Chrome DevTools: console errors, network requests and page loading.
5. Keyboard testing: Tab, Shift+Tab, Enter, Space and Escape.

## 6. Testing Procedure

1. Open index.html in a browser using VS Code Live Server.
2. Test the webpage at desktop, tablet and mobile widths.
3. Navigate the webpage using only the keyboard.
4. Check that the mobile menu opens and closes correctly.
5. Submit the contact form with empty and valid fields.
6. Run Lighthouse in Chrome DevTools.
7. Run WAVE or axe DevTools and review the reported issues.
8. Fix any confirmed issues and run the tests again.
9. Record the actual test scores and remaining issues.

## 7. Learning Outcomes

Through this task, I learned how semantic HTML improves document
structure, how CSS can be organized for maintainability, and how
JavaScript can provide accessible interactions. I also learned that
performance optimization and accessibility require testing rather
than assumptions.

## 8. Conclusion

This project demonstrates a lightweight, responsive and accessible
portfolio website. It includes keyboard-friendly navigation, form
validation, reusable CSS and documentation of performance testing.

Actual Lighthouse scores and accessibility results must be measured
in the browser before final submission.
