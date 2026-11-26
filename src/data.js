const W = 'https://www.w3schools.com/'
export const VIDEOS = W + 'videos/index.php'
export const YOUTUBE = 'https://www.youtube.com/@w3schools'
export const wUrl = (p) => W + p
// Lessons: [title, W3Schools path, description, objective, practice, week]
export const html = [
['Introduction to HTML','html/html_intro.asp','How websites work and what HTML does.','Explain how a browser shows a web page.','Open View Source on any site and spot three tags.',1],
['HTML document structure','html/html_basic.asp','The skeleton every page needs.','Write a valid HTML5 page.','Create index.html with doctype, head and body.',1],
['HTML elements and tags','html/html_elements.asp','Opening tags, closing tags and nesting.','Nest elements correctly.','Put a span inside a paragraph.',1],
['HTML attributes','html/html_attributes.asp','Extra information on elements.','Use href, src, alt and id.','Add a lang attribute and an id.',1],
['Headings and paragraphs','html/html_headings.asp','Structuring text.','Use h1 to h6 in order.','Write an About NACOS intro.',1],
['Links and navigation','html/html_links.asp','Linking pages and sections.','Link to a page and a section.','Link a menu to ids on the page.',1],
['Images','html/html_images.asp','Adding pictures with alt text.','Add images with good alt text.','Add two images with alt text.',1],
['Lists','html/html_lists.asp','Ordered and unordered lists.','Choose the right list type.','List three NACOS events.',1],
['Semantic HTML','html/html_semantic_elements.asp','Elements that describe meaning.','Use header, nav, main, section and footer.','Restructure a page with semantic tags.',2],
['Divisions and containers','html/html_blocks.asp','Grouping content with div and span.','Group content with div elements.','Wrap each event in a div.',2],
['Tables','html/html_tables.asp','Data in rows and columns.','Build a table with headers.','Make an event table.',2],
['Forms and input elements','html/html_forms.asp','Collecting user input.','Build a form with labels.','Build a contact form.',2]]
export const css = [
['Introduction to CSS','css/css_intro.asp','How CSS styles HTML.','Link an external stylesheet.','Create styles.css and change the background.',3],
['CSS syntax','css/css_syntax.asp','Selectors, properties and values.','Read and write a CSS rule.','Write rules for body and h1.',3],
['CSS selectors','css/css_selectors.asp','Targeting elements.','Use element, class and id selectors.','Style one class and one id.',3],
['Inline, internal and external CSS','css/css_howto.asp','Three ways to add CSS.','Choose the right way to add CSS.','Try all three on one page.',3],
['Colours and backgrounds','css/css_colors.asp','Colour values and backgrounds.','Use hex colours and backgrounds.','Create a lime and dark green palette.',3],
['Typography','css/css_font.asp','Fonts and sizes.','Set font family and size.','Style headings and body text.',3],
['Text styling','css/css_text.asp','Alignment, spacing and decoration.','Align and space text.','Centre your hero text.',3],
['CSS comments','css/css_comments.asp','Notes inside your CSS.','Comment your stylesheet.','Label each section of styles.css.',3],
['CSS box model','css/css_boxmodel.asp','Content, padding, border, margin.','Work out an element’s total size.','Inspect a card in dev tools.',4],
['Margin and padding','css/css_margin.asp','Space outside and inside.','Tell margin from padding.','Space out your sections.',4],
['Borders','css/css_border.asp','Outlining elements.','Style borders and corners.','Add borders to event cards.',4],
['Width and height','css/css_dimension.asp','Sizing elements.','Use width, max-width and height.','Limit content to a readable width.',4],
['Display properties','css/css_display_visibility.asp','Block, inline and none.','Change how elements display.','Turn list items into inline links.',4],
['CSS positioning','css/css_positioning.asp','Placing elements precisely.','Use relative, absolute and sticky.','Make your header sticky.',4],
['Flexbox','css/css_flexbox.asp','One-dimensional layouts.','Align items in a row.','Turn your nav into a flex row.',4],
['CSS Grid','css/css_grid.asp','Two-dimensional layouts.','Build a grid of cards.','Lay out project cards in columns.',4],
['Responsive web design','css/css_rwd_intro.asp','Layouts that adapt to screens.','Add the viewport meta tag.','Add the viewport tag to every page.',5],
['Media queries','css/css_rwd_mediaqueries.asp','Styles for screen sizes, mobile-first.','Write a breakpoint.','Stack your cards below 600px.',5],
['Responsive images','css/css_rwd_images.asp','Images that scale.','Make images scale down.','Use max-width: 100% on images.',5]]
export const js = [
['Introduction to JavaScript','js/js_intro.asp','What JavaScript does on a page.','Say what JavaScript adds to a site.','List three interactive things you use on websites.',6],
['JavaScript syntax','js/js_syntax.asp','Statements, values and rules.','Write correct statements.','Write three console.log lines.',6],
['Adding JavaScript to HTML','js/js_whereto.asp','Script tags and external files.','Link script.js to your page.','Create script.js and log a message.',6],
['Variables','js/js_variables.asp','Storing values.','Declare with let and const.','Store your name and the year.',6],
['Data types','js/js_datatypes.asp','Strings, numbers and booleans.','Tell the basic data types apart.','Store one of each type.',6],
['Operators','js/js_operators.asp','Maths and comparison.','Use arithmetic and comparison operators.','Add two numbers and compare them.',6],
['Conditional statements','js/js_if_else.asp','Making decisions with if and else.','Write an if/else statement.','Print a greeting for the time of day.',6],
['Functions','js/js_functions.asp','Reusable blocks of code.','Write and call a function.','Write a greet function.',6],
['Introduction to the DOM','js/js_htmldom.asp','How JavaScript sees your page.','Explain what the DOM is.','Draw your page as a tree of elements.',7],
['Selecting HTML elements','js/js_htmldom_elements.asp','Finding elements to change.','Select by id and selector.','Select your h1 and log it.',7],
['Changing HTML content','js/js_htmldom_html.asp','Updating text with JavaScript.','Change an element’s text.','Change the heading text.',7],
['Changing CSS styles','js/js_htmldom_css.asp','Styling with JavaScript.','Change styles from code.','Change a section’s background.',7],
['JavaScript events','js/js_events.asp','Reacting to clicks and more.','Name common events.','List five events a page can react to.',7],
['Event listeners','js/js_htmldom_eventlistener.asp','Attaching code to events.','Use addEventListener.','Make a button change your heading.',7],
['Introduction to arrays','js/js_arrays.asp','Lists of values.','Create and read an array.','Store three events in an array.',7],
['Introduction to loops','js/js_loop_for.asp','Repeating code.','Write a for loop.','Print each event in your array.',7],
['Interactive navigation menus','howto/howto_js_topnav_responsive.asp','A menu that opens on small screens.','Toggle a menu with a button.','Add a menu button to your nav.',8],
['Accordion components','howto/howto_js_accordion.asp','Panels that open and close.','Build a simple accordion.','Add an accordion to Learning Resources.',8],
['Tabs and content switching','howto/howto_js_tabs.asp','Switching content with tabs.','Show one panel at a time.','Build two tabs for Events.',8],
['Basic form validation','js/js_validation.asp','Checking form input.','Check required fields.','Reject an empty name or email.',8],
['Debugging common JavaScript errors','js/js_debugging.asp','Finding and fixing mistakes.','Read errors in the console.','Fix a deliberate error in your script.',8]]
// Roadmap: topics are separated by ";"
export const weeks = [
{n:1,tech:'HTML',track:'html',title:'Introduction to Web Development and HTML',topics:'Introduction to web development;How websites work;Introduction to HTML;HTML document structure;HTML elements and attributes;Headings and paragraphs;Links and images;Ordered and unordered lists',outcome:'Understand the basic structure of a webpage and create your first HTML page.'},
{n:2,tech:'HTML',track:'html',title:'HTML Elements, Semantic Structure and Forms',topics:'Semantic HTML;Header, navigation, main, section and footer;Divisions and containers;HTML tables;HTML forms;Input elements and form labels;Organising website content',outcome:'Structure complete website pages using appropriate HTML elements.'},
{n:3,tech:'CSS',track:'css',title:'CSS Fundamentals',topics:'Introduction to CSS;CSS syntax;CSS selectors;Inline, internal and external CSS;Colours and backgrounds;Typography;Text styling;CSS comments',outcome:'Style HTML pages and understand how CSS controls website appearance.'},
{n:4,tech:'CSS',track:'css',title:'CSS Box Model and Layout',topics:'CSS box model;Margin and padding;Borders;Width and height;Display properties;CSS positioning;Flexbox;CSS Grid',outcome:'Arrange elements and create structured website layouts.'},
{n:5,tech:'CSS',track:'css',title:'Responsive Design and CSS Integration',topics:'Responsive web design;Media queries;Responsive images;Mobile-first design principles;Combining CSS layout techniques;Testing layouts across screen sizes;Basic CSS debugging',outcome:'Create responsive layouts that work on mobile, tablet and desktop devices.'},
{n:6,tech:'JavaScript',track:'js',title:'JavaScript Fundamentals',topics:'Introduction to JavaScript;JavaScript syntax;Adding JavaScript to HTML;Variables;Data types;Operators;Conditional statements;Functions',outcome:'Understand basic JavaScript syntax and write simple programs using variables, conditions and functions.'},
{n:7,tech:'JavaScript',track:'js',title:'DOM Manipulation and Events',topics:'Introduction to the Document Object Model (DOM);Selecting HTML elements;Changing HTML content using JavaScript;Changing CSS styles using JavaScript;JavaScript events;Event listeners;Introduction to arrays;Introduction to loops',outcome:'Understand how JavaScript interacts with HTML elements and responds to user actions.'},
{n:8,tech:'JavaScript',track:'js',title:'Interactive JavaScript and Project Integration',topics:'Interactive navigation menus;Click events and event listeners;Accordion components;Tabs and content switching;Basic form validation;Combining HTML, CSS and JavaScript;Debugging common JavaScript errors',outcome:'Add basic interactive features to your website.'},
{n:9,tech:'Project',track:'',title:'Final Project Development and Presentation',topics:'Complete the collaborative NACOS website;Integrate HTML, CSS and JavaScript;Review code structure;Debug and fix errors;Test mobile and desktop responsiveness;Test JavaScript interactions;Present the completed project;Review learning outcomes',outcome:'Demonstrate a responsive website with basic JavaScript functionality.'}]
const ZIP = 'ZIP folder containing index.html, styles.css, script.js and images'
export const assignments = [
{n:1,title:'Introduction to HTML',topic:'Web basics, HTML structure, links, images and lists',objective:'Create the first page of the NACOS website.',concepts:['HTML document structure','Headings and paragraphs','Links and images','Ordered and unordered lists'],tasks:['Create a folder called nacos-website and a file named index.html.','Add the HTML5 structure: doctype, html, head and body.','Set a page title, then add one h1 and two h2 headings.','Write paragraphs introducing NACOS KolaDaisi University Chapter.','Add one image with alt text, one link, one ordered list and one unordered list.'],outcome:'A basic NACOS homepage in HTML.',submit:'An HTML file, or a ZIP folder if you have images',kinds:['html']},
{n:2,title:'Semantic Structure and Forms',topic:'Semantic HTML, tables and forms',objective:'Structure every page of the website with the right HTML elements.',concepts:['Header, nav, main, section and footer','Divisions','Tables','Forms and labels'],tasks:['Wrap your page in header, nav, main and footer.','Create seven sections: Home, About NACOS, Events, Learning Resources, Developers Team, Projects and Contact.','Link the navigation to each section.','Add an events table.','Add a contact form with labels, inputs and a button.'],outcome:'A complete, well-structured HTML version of the NACOS website.',submit:'ZIP folder with your project',kinds:['html']},
{n:3,title:'CSS Fundamentals',topic:'CSS syntax, selectors, colours and typography',objective:'Style the website with an external stylesheet.',concepts:['External stylesheets','Selectors','Colours and backgrounds','Typography'],tasks:['Create styles.css and link it from your page.','Style body, headings and links with selectors.','Choose a colour palette and apply backgrounds.','Set fonts, sizes and text styling.','Add CSS comments to label each part.'],outcome:'The first styled version of the NACOS website.',submit:'ZIP folder with index.html, styles.css and images',kinds:['css']},
{n:4,title:'CSS Box Model and Layout',topic:'Spacing, borders, Flexbox and Grid',objective:'Arrange the website into a clear layout.',concepts:['Box model','Margin and padding','Borders','Flexbox','CSS Grid'],tasks:['Add margins and padding between and inside sections.','Add borders to your event and project cards.','Set widths and heights where needed.','Use Flexbox for the navigation.','Use CSS Grid for event or project cards, and make the header sticky.'],outcome:'A well-organised website layout.',submit:'ZIP folder with index.html, styles.css and images',kinds:['css']},
{n:5,title:'Responsive Design',topic:'Media queries and responsive images',objective:'Make the website work on phones, tablets and desktops.',concepts:['Viewport','Media queries','Responsive images','Mobile-first design'],tasks:['Add the viewport meta tag.','Make images scale with max-width: 100%.','Write media queries for tablet and phone screens.','Start with the mobile layout, then add larger-screen rules.','Test at phone, tablet and desktop widths and fix problems.'],outcome:'A responsive NACOS website.',submit:'ZIP folder with index.html, styles.css and images',kinds:['css']},
{n:6,title:'JavaScript Fundamentals',topic:'Syntax, variables, conditions and functions',objective:'Write your first JavaScript programs.',concepts:['Adding JavaScript to HTML','Variables and data types','Operators','If/else','Functions'],tasks:['Create script.js and link it at the end of your page.','Store the chapter name and the year in variables.','Write a function that returns a greeting for the time of day, using if/else.','Print the result with console.log and read it in the browser console (F12).'],outcome:'Simple programs using variables, conditions and functions.',submit:ZIP,kinds:['js']},
{n:7,title:'DOM and Events',topic:'DOM, events, arrays and loops',objective:'Make your page react to the user.',concepts:['DOM selection','Changing content and styles','Events and listeners','Arrays and loops'],tasks:['Select elements by id.','Add a button that changes your heading text when clicked.','Add a button that toggles a CSS class, such as a dark theme.','Store events in an array and use a loop to build the events list.'],outcome:'A page that responds to clicks and updates itself.',submit:ZIP,kinds:['js']},
{n:8,title:'Interactive Features',topic:'Menus, accordion or tabs, and form validation',objective:'Add the interactive features the final website needs.',concepts:['Mobile menu','Accordion or tabs','Form validation','Debugging'],tasks:['Add a mobile navigation menu that opens and closes with a button.','Add one accordion or tabs component.','Validate the contact form: name and email are required, with a clear message.','Add one more interactive feature of your own choice.','Use the console to find and fix any errors.'],outcome:'A website with basic interactive features.',submit:ZIP,kinds:['js']},
{n:9,title:'Final Project and Presentation',topic:'Integration, testing and presentation',objective:'Complete, test and present the NACOS website.',concepts:['Integration','Testing','Debugging','Presentation'],tasks:['Check all seven sections are complete.','Review your code structure and file organisation.','Fix HTML, CSS and JavaScript errors.','Test on mobile and desktop, and test every interaction.','Present your finished website.'],outcome:'A responsive NACOS website with basic JavaScript functionality.',submit:'Final ' + ZIP,kinds:['html','css','js']}]
export const milestones = ['Your first HTML page','Semantic structure, tables and forms','CSS styling','Box model and layout','Responsive design','JavaScript fundamentals','DOM and events','Interactive features','Final integration and presentation']
export const resources = [
{t:'HTML Tutorial',c:'HTML Resources',type:'Lessons + videos',d:'Weeks 1–2: every HTML topic with its W3Schools reading.',to:'/learn/html'},
{t:'CSS Tutorial',c:'CSS Resources',type:'Lessons + videos',d:'Weeks 3–5: every CSS topic with its W3Schools reading.',to:'/learn/css'},
{t:'JavaScript Tutorial',c:'JavaScript Resources',type:'Lessons + videos',d:'Weeks 6–8: every JavaScript topic with its W3Schools reading.',to:'/learn/js'},
{t:'HTML Exercises',c:'Practice Exercises',type:'Exercises',d:'Short quizzes to test your HTML.',u:W+'html/html_exercises.asp'},
{t:'CSS Exercises',c:'Practice Exercises',type:'Exercises',d:'Short quizzes to test your CSS.',u:W+'css/css_exercises.asp'},
{t:'JavaScript Exercises',c:'Practice Exercises',type:'Exercises',d:'Short quizzes to test your JavaScript.',u:W+'js/js_exercises.asp'},
{t:'Video Tutorials',c:'Videos',type:'Embedded videos',d:'Watch W3Schools video lessons alongside the written tutorials.',to:'/videos'}]

// ---- W3Schools YouTube channel videos, in channel order.
// H = HTML, C = CSS: (title, duration, outline topic or '' if not in our outline, YouTube link or ID).
// An empty last value shows "Video coming soon". Change the topic text to move a video to another lesson.
const H = (title, dur, topic, yt = '') => ({ track: 'html', title, dur, topic, yt })
const C = (title, dur, topic, yt = '') => ({ track: 'css', title, dur, topic, yt })
const J = (title, dur, topic, yt = '') => ({ track: 'js', title, dur, topic, yt })
export const videos = [
H('HTML Introduction','3:14','Introduction to HTML','it1rTvBcfRg'),
H('HTML Editors','1:28','Introduction to HTML','bBP0ckEln4Y'),
H('HTML Elements','2:17','HTML elements and tags','vIoO52MdZFE'),
H('HTML Attributes','2:17','HTML attributes','yMX901oVtn8'),
H('HTML Headings','1:40','Headings and paragraphs','9gHPpwq6IaY'),
H('HTML Paragraphs','1:02','Headings and paragraphs','qis4kAOThLw'),
H('HTML Styles','1:46','HTML attributes','twdNPJfbj_8'),
H('HTML Formatting','2:02','Headings and paragraphs','7FqQLqNIEY8'),
H('HTML Comments','0:48','HTML document structure','229HYq40vaA'),
H('HTML Colors','3:06','Colours and backgrounds','zCrolmdqmF8'),
H('HTML CSS','2:15','Inline, internal and external CSS','cZHp-Oozg6I'),
H('HTML Links','3:27','Links and navigation','HA6bByKdAQM'),
H('HTML Images','3:43','Images','FmoYRiepmOE'),
H('HTML Tables','2:30','Tables','e62D-aayveY'),
H('HTML Lists','1:39','Lists','-QuK8taGLCs'),
H('HTML Block and Inline','1:18','Divisions and containers','M4n-WSkehmI'),
H('HTML Classes','1:45','HTML attributes','tWIkDOJo0Ts'),
H('HTML Id','2:28','HTML attributes','rZ0k516qZmc'),
H('HTML Iframes','1:41','HTML elements and tags','qP23O70ve7k'),
H('HTML JavaScript','1:42','Adding JavaScript to HTML','uSgcWDkwc3U'),
H('HTML Head','1:33','HTML document structure','WeuVX5x2MJE'),
H('HTML Forms','2:39','Forms and input elements','VLeERv_dR6Q'),
C('CSS Introduction','1:37','Introduction to CSS','AGDDdsiZ0Ko'),
C('CSS Syntax','1:49','CSS syntax','G8r00ZNopTE'),
C('CSS Simple Selectors','2:13','CSS selectors','ZNskBxLVOfs'),
C('How to add CSS to HTML','2:22','Inline, internal and external CSS','VSwaoQ3TFkQ'),
C('CSS Comments','1:38','CSS comments','uVtEJD3vBEs'),
C('CSS Colors Introduction','3:02','Colours and backgrounds','q0uWmobMf6I'),
C('CSS Colors RGB & RGBA','1:54','Colours and backgrounds','6tbUo6PXc88'),
C('CSS Colors Hex','2:43','Colours and backgrounds','LLmCr_201GU'),
C('CSS Colors HSL','2:17','Colours and backgrounds','Vilk0BFQZ4Y'),
C('CSS Background Colors','2:12','Colours and backgrounds','-itttmX6HX0'),
C('CSS Background Images','1:27','Colours and backgrounds','FMyU_h8m-0c'),
C('CSS Background Repeat and Position','1:51','Colours and backgrounds','k9dNFtC2F8A'),
C('CSS Background Attachment','1:32','Colours and backgrounds','lXs8BRnrW_M'),
C('CSS Background Shorthand','1:46','Colours and backgrounds','rSEKmi5tR9E'),
J('JavaScript Introduction','2:49','Introduction to JavaScript','zofMnllkVfI'),
J('JavaScript Where To','2:00','Adding JavaScript to HTML','W-3vp79-d3Y'),
J('JavaScript Output','2:45','Adding JavaScript to HTML','we8YhT-NiOA'),
J('JavaScript Statements','2:01','JavaScript syntax','ZjotKN861EI'),
J('JavaScript Syntax','4:04','JavaScript syntax','4BBlc_qDs8g'),
J('JavaScript Comments','2:15','JavaScript syntax','8yroEebhaEk'),
J('JavaScript Variables','3:39','Variables','7xStNKTM3bE'),
J('JavaScript Let Keyword','3:15','Variables','-rpU6z9O88o'),
J('JavaScript const Keyword','3:29','Variables','8UjRPL3Foh0'),
J('JavaScript Arithmetic Operators','3:28','Operators','yEJ94pMiT-o')
].map((v, i) => ({ ...v, key: v.track[0] + (i + 1) }))
// Outline topics that have no channel video: students are sent to the W3Schools lesson.
export const noVideo = [...html.map(t => ['html', t]), ...css.map(t => ['css', t]), ...js.map(t => ['js', t])]
  .filter(([, t]) => !videos.some(v => v.topic === t[0])).map(([track, t]) => ({ track, title: t[0], path: t[1] }))
export const lessonPath = (topic) => [...html, ...css, ...js].find(t => t[0] === topic)?.[1]
export const ytId = (s) => { if (!s) return ''; const m = s.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/); return m ? m[1] : /^[\w-]{11}$/.test(s) ? s : '' }
