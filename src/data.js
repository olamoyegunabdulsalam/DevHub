const W = 'https://www.w3schools.com/'
export const VIDEOS = W + 'videos/index.php'
export const wUrl = (p) => W + p
// [title, w3schools path, description, objective, practice exercise, related assignment]
export const html = [
['Introduction to HTML','html/html_intro.asp','What HTML is and how browsers use it.','Explain what HTML does on a web page.','Open View Source on any site and spot three tags.',1],
['HTML document structure','html/html_basic.asp','The skeleton every page needs.','Write a valid HTML5 document from memory.','Create index.html with doctype, html, head and body.',1],
['HTML elements and tags','html/html_elements.asp','Opening tags, closing tags and nesting.','Tell an element from a tag and nest correctly.','Nest a span inside a paragraph inside a div.',1],
['Headings and paragraphs','html/html_headings.asp','Structuring text content.','Use h1–h6 in a sensible hierarchy.','Write an About NACOS section with one h1 and two h2s.',1],
['HTML attributes','html/html_attributes.asp','Extra information on elements.','Use id, class, src, href and alt correctly.','Add a lang attribute and an id to three elements.',2],
['Links and navigation','html/html_links.asp','Linking pages and page sections.','Build a nav that jumps to page sections.','Link a menu to sections with id anchors.',2],
['Images','html/html_images.asp','Adding pictures with alt text.','Add images with meaningful alt text.','Add two images with width and alt attributes.',3],
['Lists','html/html_lists.asp','Ordered, unordered and description lists.','Choose the right list type.','List three NACOS events in an ordered list.',3],
['Tables','html/html_tables.asp','Showing data in rows and columns.','Build a table with headers.','Make an event table: date, title, venue.',3],
['Forms and input elements','html/html_forms.asp','Collecting user input.','Build a form with labels and inputs.','Build a contact form with name, email and message.',4],
['Semantic HTML','html/html_semantic_elements.asp','Elements that describe their meaning.','Replace generic divs with semantic tags.','Restructure a page with header, nav, main and footer.',4]]
export const css = [
['Introduction to CSS','css/css_intro.asp','How CSS styles HTML.','Link an external stylesheet.','Create styles.css and change the page background.',6],
['CSS syntax','css/css_syntax.asp','Selectors, properties and values.','Read and write a CSS rule.','Write rules for body, h1 and p.',6],
['CSS selectors','css/css_selectors.asp','Targeting elements precisely.','Use element, class and id selectors.','Style one class and one id on your page.',6],
['Colours and backgrounds','css/css_colors.asp','Colour values and backgrounds.','Use hex colours and background properties.','Define a lime and dark green palette for NACOS.',6],
['Typography','css/css_font.asp','Fonts, sizes and text styling.','Set font family, size and line height.','Style headings and body text consistently.',6],
['Margins and padding','css/css_margin.asp','Space outside and inside elements.','Tell margin from padding.','Add spacing between page sections.',7],
['Borders','css/css_border.asp','Outlining elements.','Style borders and rounded corners.','Add a border to each event card.',7],
['CSS box model','css/css_boxmodel.asp','Content, padding, border and margin.','Calculate an element’s total size.','Inspect a card in browser dev tools.',7],
['Width and height','css/css_dimension.asp','Sizing elements.','Use width, max-width and height.','Constrain your content to a readable width.',7],
['Flexbox','css/css_flexbox.asp','One-dimensional layouts.','Align items in a row or column.','Turn your nav links into a flex row.',8],
['Introduction to CSS Grid','css/css_grid.asp','Two-dimensional layouts.','Create a simple grid of cards.','Lay out project cards in three columns.',8],
['Responsive design','css/css_rwd_intro.asp','Layouts that adapt to screens.','Add the viewport meta tag and flexible sizing.','Make images scale with max-width: 100%.',9],
['Media queries','css/css_rwd_mediaqueries.asp','Styles for different screen sizes.','Write a breakpoint for small screens.','Stack your cards below 600px.',9]]
export const assignments = [
{n:1,title:'HTML Foundations',topic:'Introduction to HTML, structure, headings and paragraphs',objective:'Create the first page of the NACOS website.',concepts:['HTML document structure','Page title','Headings','Paragraphs'],tasks:['Create a file named index.html.','Add the HTML5 doctype, html, head and body elements.','Set a title that names the chapter.','Add an h1 and at least two h2 headings.','Write paragraphs introducing NACOS and the chapter.'],outcome:'A basic HTML homepage.',submit:'An HTML file or ZIP folder',kind:'html'},
{n:2,title:'Website Structure and Navigation',topic:'Links, attributes and page sections',objective:'Organise the site into sections with working navigation.',concepts:['Links','Attributes','id anchors','Content organisation'],tasks:['Add a navigation list: Home, About, Events, Learning Resources, Developers Team, Projects, Contact.','Create a section for each item with a matching id.','Link each menu item to its section.','Use headings and paragraphs in every section.'],outcome:'An HTML website with organised content and working navigation.',submit:'Updated HTML file or ZIP folder',kind:'html'},
{n:3,title:'Images, Lists and Tables',topic:'Images, lists and tables',objective:'Make the site richer and better organised.',concepts:['Images and alt text','Ordered and unordered lists','Tables'],tasks:['Add relevant images with alt text.','Build an Events section.','Use one ordered and one unordered list.','Add a table of event or programme information.'],outcome:'A website with richer and more organised content.',submit:'Updated project files (ZIP if you have images)',kind:'html'},
{n:4,title:'Forms and Semantic HTML',topic:'Forms and semantic elements',objective:'Add a contact form and structure the page meaningfully.',concepts:['Forms','Labels and inputs','Buttons','Semantic elements'],tasks:['Build a contact form with name, email and message fields.','Connect every input to a label.','Add a submit button.','Use header, nav, main, section and footer.'],outcome:'A properly structured HTML website.',submit:'Updated project files',kind:'html'},
{n:5,title:'HTML Revision and Integration',topic:'Revision of all HTML topics',objective:'Finish the complete unstyled HTML site.',concepts:['Validation','Link checking','File organisation'],tasks:['Fix structural errors in your HTML.','Check every link and image.','Confirm all seven required sections exist.','Organise files into folders such as images/.'],outcome:'A complete unstyled HTML version of the NACOS website.',submit:'Complete HTML project (ZIP)',kind:'html'},
{n:6,title:'Introduction to CSS',topic:'CSS syntax, selectors, colours and typography',objective:'Give the site its first visual identity.',concepts:['External stylesheets','Selectors','Colours','Typography'],tasks:['Create styles.css and link it from every page.','Apply a colour palette and backgrounds.','Style headings and paragraphs.','Set fonts and line height consistently.'],outcome:'The first styled version of the NACOS website.',submit:'HTML and CSS files or ZIP folder',kind:'css'},
{n:7,title:'CSS Box Model and Spacing',topic:'Margins, padding, borders and sizing',objective:'Improve spacing and style content cards.',concepts:['Box model','Margin and padding','Borders','Width and height'],tasks:['Apply margins and padding between sections.','Add borders to cards.','Set widths and heights where needed.','Style cards for events and learning resources.'],outcome:'A more organised and visually polished website.',submit:'Updated project ZIP folder',kind:'css'},
{n:8,title:'Flexbox and Grid',topic:'Flexbox and CSS Grid',objective:'Arrange the site layout.',concepts:['Flexbox','CSS Grid','Alignment'],tasks:['Use Flexbox for navigation and alignment.','Arrange event cards.','Arrange project cards with Grid.','Improve the overall layout.'],outcome:'A well-organised website layout.',submit:'Updated project ZIP folder',kind:'css'},
{n:9,title:'Responsive Design',topic:'Responsive design and media queries',objective:'Make the site work on phones and desktops.',concepts:['Viewport','Media queries','Flexible sizing'],tasks:['Add the viewport meta tag.','Write media queries for small screens.','Resize text and images for mobile.','Make the navigation responsive.','Test on a phone and a desktop.'],outcome:'A responsive NACOS website.',submit:'Updated project ZIP folder',kind:'css'},
{n:10,title:'Final Project Integration',topic:'Review and presentation',objective:'Finish and present the complete site.',concepts:['Review','Debugging','Presentation'],tasks:['Review the complete website.','Fix structural and styling problems.','Check every navigation link.','Verify images and content.','Improve responsiveness, then present your project.'],outcome:'A complete NACOS website frontend prototype built with HTML and CSS.',submit:'Final ZIP folder with the complete project',kind:'css'}]
export const milestones = ['Basic HTML structure','Website navigation','Content and images','Forms and semantic HTML','Complete HTML structure','CSS styling','Spacing and layout','Flexbox and Grid','Responsive design','Final integration']
export const resources = [
{t:'HTML Tutorial',c:'HTML Resources',type:'Lessons + videos',d:'Every HTML topic with its video and W3Schools reading.',to:'/learn/html'},
{t:'CSS Tutorial',c:'CSS Resources',type:'Lessons + videos',d:'Every CSS topic with its video and W3Schools reading.',to:'/learn/css'},
{t:'Video Tutorials',c:'Video Tutorials',type:'Embedded videos',d:'All lessons in one player, in roadmap order.',to:'/videos'},
{t:'HTML Exercises',c:'Practice Exercises',type:'Exercises',d:'Short quizzes to test your HTML.',u:W+'html/html_exercises.asp'},
{t:'CSS Exercises',c:'Practice Exercises',type:'Exercises',d:'Short quizzes to test your CSS.',u:W+'css/css_exercises.asp'}]

// ---- W3Schools YouTube channel videos, in channel order.
// H = HTML, C = CSS: (title, duration, outline topic or '' if not in our outline, YouTube link or ID).
// An empty last value shows "Video coming soon". Change the topic text to move a video to another lesson.
const H = (title, dur, topic, yt = '') => ({ track: 'html', title, dur, topic, yt })
const C = (title, dur, topic, yt = '') => ({ track: 'css', title, dur, topic, yt })
export const videos = [
H('HTML Introduction', '3:14', 'Introduction to HTML', 'it1rTvBcfRg'),
H('HTML Editors', '1:28', 'Introduction to HTML', 'bBP0ckEln4Y'),
H('HTML Elements', '2:17', 'HTML elements and tags', 'vIoO52MdZFE'),
H('HTML Attributes', '2:17', 'HTML attributes', 'yMX901oVtn8'),
H('HTML Headings', '1:40', 'Headings and paragraphs', '9gHPpwq6IaY'),
H('HTML Paragraphs', '1:02', 'Headings and paragraphs', 'qis4kAOThLw'),
H('HTML Styles', '1:46', 'HTML attributes', 'twdNPJfbj_8'),
H('HTML Formatting', '2:02', 'Headings and paragraphs', '7FqQLqNIEY8'),
H('HTML Comments', '0:48', 'HTML document structure', '229HYq40vaA'),
H('HTML Colors', '3:06', '', 'zCrolmdqmF8'),
H('HTML CSS', '2:15', '', 'cZHp-Oozg6I'),
H('HTML Links', '3:27', 'Links and navigation', 'HA6bByKdAQM'),
H('HTML Images', '3:43', 'Images', 'FmoYRiepmOE'),
H('HTML Tables', '2:30', 'Tables', 'e62D-aayveY'),
H('HTML Lists', '1:39', 'Lists', '-QuK8taGLCs'),
H('HTML Block and Inline', '1:18', 'HTML elements and tags', 'M4n-WSkehmI'),
H('HTML Classes', '1:45', 'HTML attributes', 'tWIkDOJo0Ts'),
H('HTML Id', '2:28', 'HTML attributes', 'rZ0k516qZmc'),
H('HTML Iframes', '1:41', '', 'qP23O70ve7k'),
H('HTML JavaScript', '1:42', '', 'uSgcWDkwc3U'),
H('HTML Head', '1:33', 'HTML document structure', 'WeuVX5x2MJE'),
H('HTML Forms', '2:39', 'Forms and input elements', 'VLeERv_dR6Q'),
C('CSS Introduction','1:37','Introduction to CSS','AGDDdsiZ0Ko'),
C('CSS Syntax','1:49','CSS syntax','G8r00ZNopTE'),
C('CSS Simple Selectors','2:13','CSS selectors','ZNskBxLVOfs'),
C('How to add CSS to HTML','2:22','Introduction to CSS','VSwaoQ3TFkQ'),
C('CSS Comments','1:38','CSS syntax','uVtEJD3vBEs'),
C('CSS Colors Introduction','3:02','Colours and backgrounds','q0uWmobMf6I'),
C('CSS Colors RGB & RGBA','1:54','Colours and backgrounds','6tbUo6PXc88'),
C('CSS Colors Hex','2:43','Colours and backgrounds','LLmCr_201GU'),
C('CSS Colors HSL','2:17','Colours and backgrounds','Vilk0BFQZ4Y'),
C('CSS Background Colors','2:12','Colours and backgrounds','-itttmX6HX0'),
C('CSS Background Images','1:27','Colours and backgrounds','FMyU_h8m-0c'),
C('CSS Background Repeat and Position','1:51','Colours and backgrounds','k9dNFtC2F8A'),
C('CSS Background Attachment','1:32','Colours and backgrounds','lXs8BRnrW_M'),
C('CSS Background Shorthand','1:46','Colours and backgrounds','rSEKmi5tR9E')
].map((v, i) => ({ ...v, key: v.track[0] + (i + 1) }))
// Outline topics that have no channel video: students are sent to the W3Schools lesson.
export const noVideo = [...html.map(t => ['html', t]), ...css.map(t => ['css', t])]
  .filter(([, t]) => !videos.some(v => v.topic === t[0])).map(([track, t]) => ({ track, title: t[0], path: t[1] }))
export const lessonPath = (topic) => [...html, ...css].find(t => t[0] === topic)?.[1]
export const ytId = (s) => { if (!s) return ''; const m = s.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/); return m ? m[1] : /^[\w-]{11}$/.test(s) ? s : '' }
