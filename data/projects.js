import cointra_thumbnail from '../src/assets/images/cointra/thumbnail.png';
import cointra_img1 from '../src/assets/images/cointra/demo1.png';
import cointra_img2 from '../src/assets/images/cointra/demo2.png';
import cointra_img3 from '../src/assets/images/cointra/demo3.png';

import imo_thumbnail from '../src/assets/images/imo/thumbnail.png';
import imo_img1 from '../src/assets/images/imo/demo1.png';
import imo_img2 from '../src/assets/images/imo/demo2.png';
import imo_img3 from '../src/assets/images/imo/demo3.png';

import threed_thumbnail from '../src/assets/images/threed/thumbnail.png';
import threed_gif1 from '../src/assets/images/threed/demo1.gif';
import threed_gif2 from '../src/assets/images/threed/demo2.gif';

import cardprinting_thumbnail from '../src/assets/images/cardprinting/thumbnail.png';
import cardprinting_img1 from '../src/assets/images/cardprinting/demo1.png';
import cardprinting_img2 from '../src/assets/images/cardprinting/demo2.png';
import cardprinting_img3 from '../src/assets/images/cardprinting/demo3.png';

import portfolio2022_thumbnail from '../src/assets/images/portfolio2022/thumbnail.png';
import portfolio2022_img1 from '../src/assets/images/portfolio2022/demo1.png';
import portfolio2022_img2 from '../src/assets/images/portfolio2022/demo2.png';
import portfolio2022_img3 from '../src/assets/images/portfolio2022/demo3.png';
import portfolio2022_img4 from '../src/assets/images/portfolio2022/demo4.png';
import portfolio2022_gif5 from '../src/assets/images/portfolio2022/demo5.gif';
import portfolio2022_gif6 from '../src/assets/images/portfolio2022/demo6.gif';
import portfolio2022_gif7 from '../src/assets/images/portfolio2022/demo7.gif';

import orbit_thumbnail from '../src/assets/images/orbit/thumbnail.png';
import orbit_img1 from '../src/assets/images/orbit/demo1.png';
import orbit_img2 from '../src/assets/images/orbit/demo2.png';
import orbit_img3 from '../src/assets/images/orbit/demo3.png';
import orbit_img4 from '../src/assets/images/orbit/demo4.png';
import orbit_img5 from '../src/assets/images/orbit/demo5.png';

import cros_thumbnail from '../src/assets/images/cros/thumbnail.png';
import cros_figma1 from '../src/assets/images/cros/figma1.png';
import cros_figma2 from '../src/assets/images/cros/figma2.png';
import cros_demo1 from '../src/assets/images/cros/demo1.png';
import cros_demo2 from '../src/assets/images/cros/demo2.png';
import cros_demo3 from '../src/assets/images/cros/demo3.png';
import cros_demo4 from '../src/assets/images/cros/demo4.png';
import cros_admin1 from '../src/assets/images/cros/admin1.png';
import cros_admin2 from '../src/assets/images/cros/admin2.png';
import cros_admin3 from '../src/assets/images/cros/admin3.png';
import cros_admin4 from '../src/assets/images/cros/admin4.png';
import cros_admin5 from '../src/assets/images/cros/admin5.png';
import cros_admin6 from '../src/assets/images/cros/admin6.png';
import cros_admin7 from '../src/assets/images/cros/admin7.png';
import cros_staff1 from '../src/assets/images/cros/staff1.png';
import cros_staff2 from '../src/assets/images/cros/staff2.png';
import cros_staff3 from '../src/assets/images/cros/staff3.png';
import cros_staff4 from '../src/assets/images/cros/staff4.png';
import cros_staff5 from '../src/assets/images/cros/staff5.png';
import cros_staff6 from '../src/assets/images/cros/staff6.png';
import cros_staff7 from '../src/assets/images/cros/staff7.png';

import tsks_thumbnail from '../src/assets/images/tsks/thumbnail.png';
import tsks_figma from '../src/assets/images/tsks/figma1.png';
import tsks_developement1 from '../src/assets/images/tsks/developement1.png';
import tsks_demo1 from '../src/assets/images/tsks/demo1.png';
import tsks_demo2 from '../src/assets/images/tsks/demo2.png';
import tsks_demo3 from '../src/assets/images/tsks/demo3.png';
import tsks_demo4 from '../src/assets/images/tsks/demo4.png';
import tsks_demo5 from '../src/assets/images/tsks/demo5.png';
import tsks_demo6 from '../src/assets/images/tsks/demo6.png';
import tsks_demo7 from '../src/assets/images/tsks/demo7.png';
import tsks_demo8 from '../src/assets/images/tsks/demo8.png';
import tsks_demo9 from '../src/assets/images/tsks/demo9.png';
import tsks_demo10 from '../src/assets/images/tsks/demo10.png';
import tsks_demo11 from '../src/assets/images/tsks/demo11.png';

import placeholder from '../src/assets/images/placeholder.jpg';

export const projects = [
  {
    /** 
    ===================================== PROJECT 2 =====================================
    **/
    id: 1,
    title: 'Cointra',
    alt: '',
    description:
      'CoinTra provides real-time information on the top 200 cryptocurrencies, including their current value, market cap, volume, and other key metrics. Users can search for specific coins using the search function.',
    thumbnail: cointra_thumbnail,
    image: cointra_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/CoinTra',
    live: 'https://cointra.netlify.app/',
    status: 'Future plans: Add a top 5 coins carousel and chat option.',
    tools: ['React.js', 'JavaScript', 'CSS', 'Axios', 'Netlify'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Main page',
        image: cointra_img1,
        description:
          'Users can view the real-time status of all cryptocurrencies, as well as use the search function to quickly locate information on a specific coin.',
        status: '',
      },

      {
        id: 2,
        title: 'Single Coin page',
        image: cointra_img2,
        description:
          'The website provides a single coin page that displays key metrics such as price change percentage, market cap value, and volume, along with a historical chart to track price trends. To fetch historical data, the website uses the Axios library, which enables efficient and reliable data retrieval.',
        status: '',
      },

      {
        id: 3,
        title: 'Pagination',
        image: cointra_img3,
        description:
          'To enable seamless navigation between pages, the website utilizes a component built using Material UI, a popular React-based design framework.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/xHz6DkeAF44',
  },
  /**
  ===================================== PROJECT 1 =====================================
  **/
  {
    id: 2,
    title: 'Imo',
    alt: '',
    description:
      "Imo is a image classification website. Users can easily upload their images and get instant results about the image's content, allowing them to organize their collections more efficiently.",
    thumbnail: imo_thumbnail,
    image: imo_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/imo',
    live: '',
    status:
      "Future plans: Add new features, such as image details and image sharing options, to enhance users' experience.",
    tools: ['Django', 'TesorFlow', 'Keras', 'JavaScript', 'HTML', 'CSS'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Upload Image',
        image: imo_img1,
        description:
          'Users can upload one or more images to Imo, and the website will classify them into their respective categories using the VGG-16 convolutional neural network. VGG-16 is a deep neural network that consists of 16 layers and is commonly used for image recognition tasks due to its high accuracy and performance.',
        status: '',
      },

      {
        id: 2,
        title: 'Category',
        image: imo_img2,
        description:
          'Imo will categorize all the uploaded images into their respective categories, and users can view the items in each category individually by selecting the desired category. This feature will allow users to easily organize their images and quickly locate specific items of interest.',
        status: '',
      },

      {
        id: 3,
        title: 'Images',
        image: imo_img3,
        description:
          'This page displays the images belonging to a particular category, enabling users to browse through them easily.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/w7nT0l8yMFk',
  },

  /** 
  ===================================== PROJECT 3 =====================================
  **/
  {
    id: 3,
    title: 'ThreeD',
    alt: '',
    description:
      'This landing page for a drone website is built using React and Three.js, providing a modern and interactive user interface.',
    thumbnail: threed_thumbnail,
    image: threed_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/drone-website',
    live: 'https://threedrone.netlify.app/',
    status:
      'Future plans: At present, the 3D model features an animation that rotates the propeller of the drone. However, I am considering adding more interactive elements such as pan and zoom in the future.',
    tools: ['React.js', 'Three.js', 'Blender', 'JavaScript', 'CSS', 'Netlify'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Main page',
        image: threed_thumbnail,
        description:
          'Currently, this website has only one page. However iam planning to add more features and pages to this website.',
        status: '',
      },
      {
        id: 1,
        title: 'Rotation of Propeller',
        gif: threed_gif1,
        description:
          'If a user hovers over the drone GLB model, the propeller rotation will start automatically, enhancing the interactive experience.',
        status: '',
      },
      {
        id: 1,
        title: 'Change color',
        gif: threed_gif2,
        description:
          'User can click a button to change the color of the drone to blue, red, yellow, or green, providing a customizable and interactive experience.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/NCiPE6CgJy8',
  },
  /** 
  ===================================== PROJECT 4 =====================================
  **/
  {
    id: 4,
    title: 'Card Printing',
    alt: '',
    description:
      'This software reduces the hallmarking card generation process from 16 minutes to less than 4 minutes.',
    thumbnail: cardprinting_thumbnail,
    image: cardprinting_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/CardPrinting',
    live: '',
    status:
      'This software is designed for use in gold hallmarking centers and is used by over 10 such centers for generating and printing cards with gold hallmarking information.',
    tools: ['Python', 'Tkinter'],
    year: '2023',
    category: 'desktop',
    feature: [
      {
        id: 1,
        title: 'Login Page',
        image: cardprinting_img1,
        description:
          'Users can log in from this page, and after logging in, they will be redirected to the home page.',
        status: '',
      },
      {
        id: 2,
        title: 'Home Page',
        image: cardprinting_img2,
        description:
          "The user can input information, and upon clicking the 'Gold' button, the software will generate a card with the entered information.",
        status: '',
      },
      {
        id: 3,
        title: 'Print page',
        image: cardprinting_img3,
        description:
          "After the user clicks on the 'Print' button, the software will print a hardcopy of the generated card.",
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/CnM-VT5AU4Y',
  },
  /** 
  ===================================== PROJECT 5 =====================================
  **/
  {
    id: 5,
    title: 'Portfolio 2022',
    alt: '',
    description:
      'Portfolio website 2022 made with ReactJs and other technologies',
    thumbnail: portfolio2022_thumbnail,
    image: portfolio2022_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/portfolio-2022.git',
    live: 'https://nilax-2022.netlify.app/',
    status:
      'Need to update code, refractor complete project and improve performance.',
    tools: ['React.js', 'CSS', 'FramerMotion', 'Netlify'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'About Page',
        image: portfolio2022_img1,
        description:
          'This page contains information about me and also contains one interactive 3d model.',
        status: '',
      },
      {
        id: 2,
        title: 'Skills Page',
        image: portfolio2022_img2,
        description: 'List of all the skills and technologies that I know.',
        status: '',
      },
      {
        id: 3,
        title: 'Projects Page',
        image: portfolio2022_img3,
        description:
          'My portfolio includes a section that highlights some of my projects.',
        status: '',
      },
      {
        id: 4,
        title: 'Single Projects Page',
        image: portfolio2022_img4,
        description:
          'The focus of this page is to provide a detailed overview of one project.',
        status: '',
      },
      {
        id: 5,
        title: 'Custom Cursor',
        gif: portfolio2022_gif5,
        description:
          'The custom cursor is built using CSS and JavaScript. The custom cursor is a blob that has a gradient background that spins and some tweaks in border-radius and transform property. It behaves like a liquid object.',
        status: '',
      },
      {
        id: 6,
        title: '3d Model',
        gif: portfolio2022_gif6,
        description: 'You can experience an immersive interactive 3D model',
        status: '',
      },
      {
        id: 7,
        title: 'Tilt Image',
        gif: portfolio2022_gif7,
        description:
          'If you hover over the image on the project details page, a JavaScript animation will cause it to tilt and add a 3d effect.',
        status:
          'To enhance the tilt animation on the image, I need to modify the code so that the animation continues even after the cursor is removed from the image.',
      },
    ],
  },
  /** 
  ===================================== PROJECT 6 =====================================
  **/
  {
    id: 6,
    title: 'Orbit',
    alt: '',
    description:
      'A native Android app that includes login and registration functionality, which can be integrated into any Android application.',
    thumbnail: orbit_thumbnail,
    image: orbit_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/Orbit.git',
    live: '',
    status:
      'a native Android app that includes login and registration functionality, which can be integrated into any Android application.',
    tools: ['AndroidStudio', 'Java', 'XML', 'Firebase'],
    year: '2023',
    category: 'android',
    feature: [
      {
        id: 1,
        title: 'Onboarding Activity',
        image: orbit_img1,
        description:
          'This activity includes a slider that displays all the features of the application and allows the user to navigate to the login page and registration page.',
        status: '',
      },
      {
        id: 2,
        title: 'Login Activity',
        image: orbit_img2,
        description:
          'In addition, the user can also reset their password if their account is available.',
        status: '',
      },
      {
        id: 3,
        title: 'Registration Activity',
        image: orbit_img3,
        description:
          'Furthermore, the user can register for an account using a username and email, and the registration form includes password validation as well.',
        status: '',
      },
      {
        id: 4,
        title: 'Forgot Password Activity',
        image: orbit_img4,
        description: 'The user can reset their password from within this page.',
        status: '',
      },
      {
        id: 5,
        title: 'Project Structure',
        image: orbit_img5,
        description:
          'The project structure has been designed in a simple manner to facilitate ease of understanding for the code.',
        status: '',
      },
    ],
  },

  /** 
  ===================================== PROJECT 7 =====================================
  **/
  {
    id: 7,
    title: 'Cros',
    alt: '',
    description:
      'Cros is a customer relationship management (CRM) software built with Django, specifically designed for shop owners to help manage and track customer interactions, sales, and inventory. The application offers features such as sales reporting, customer analytics, and inventory management to help shop owners streamline their operations and improve their customer service.',
    thumbnail: cros_thumbnail,
    image: cros_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/Cros.git',
    live: 'https://cros-crm.vercel.app/',
    status:
      'To enable users to access the project without the need for login or signup, a guest user feature will need to be implemented. This feature will allow anyone to use the project with limited access, providing a seamless user experience. By incorporating the guest user feature, users can quickly access the project and perform basic tasks, such as viewing content or submitting forms, without creating an account or providing personal information.',
    tools: [
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'Charts.js',
      'Figma',
      'Vercel',
      'Railway',
    ],
    year: '2023',
    category: 'web',
    feature: [
      {
        title: 'Figma Design1',
        image: cros_figma1,
        description:
          'After creating a prototype in Figma, I proceeded with the development phase where I changed the color palette. Therefore, there may be differences between the color palette used in Figma and the one used in the final development.',
        status: '',
      },
      {
        title: 'Figma Design2',
        image: cros_figma2,
        description:
          "The login and signup page design used in the current development phase is based on my previous project's design. However, there are still some features and design elements that need to be implemented in order to ensure that the login and signup pages match the design in Figma.",
        status: '',
      },
      {
        title: 'Guest',
        image: cros_demo1,
        description:
          'Users who want to try the application can access it using the guest feature, which allows them to explore the application without creating an account or logging in.',
        status: '',
      },
      {
        title: 'Login',
        image: cros_demo2,
        description:
          'Users can login with username or email and password credentials.',
        status: '',
      },
      {
        title: 'Register',
        image: cros_demo3,
        description:
          'Any user who registers using this page will be assigned staff permissions and will not be allowed to have admin permissions.',
        status: '',
      },
      {
        title: 'Reset Password',
        image: cros_demo4,
        description: 'Reset password using email and django auth_views.',
        status: '',
      },
      {
        title: 'Admin Dashboard',
        image: cros_admin1,
        description:
          'This page is only visible to people with administrative privileges other users cannot access it. The page contains all the relevant information about stocks, orders, pending orders count, and paid orders count. Additionally, there are two charts on the page; one displays the current stock levels with item sales, and the other shows the number of paid and pending orders. The admin can quickly view ongoing orders in real-time on this page.',
        status: '',
      },
      {
        title: 'Admin Dashboard',
        image: cros_admin1,
        description:
          'This page is only visible to people with administrative privileges other users cannot access it. The page contains all the relevant information about stocks, orders, pending orders count, and paid orders count. Additionally, there are two charts on the page; one displays the current stock levels with item sales, and the other shows the number of paid and pending orders. The admin can quickly view ongoing orders in real-time on this page.',
        status: '',
      },
      {
        title: 'Admin Dashboard',
        image: cros_admin1,
        description:
          'This page is only visible to people with administrative privileges other users cannot access it. The page contains all the relevant information about stocks, orders, pending orders count, and paid orders count. Additionally, there are two charts on the page; one displays the current stock levels with item sales, and the other shows the number of paid and pending orders. The admin can quickly view ongoing orders in real-time on this page.',
        status: '',
      },
      {
        title: 'Admin Orders',
        image: cros_admin2,
        description:
          "This page features two categories for orders: 'paid' and 'pending.' All orders are sorted into either of these two categories.",
        status: '',
      },
      {
        title: 'Admin Orders Pending',
        image: cros_admin3,
        description:
          'This page exclusively displays all pending orders on the shop, and users have the option to remove or edit pending orders.',
        status: '',
      },
      {
        title: 'Admin Orders Paid',
        image: cros_admin4,
        description:
          "This page exclusively displays all paid orders on the shop, and users doesn't have the option to remove or edit pending orders.",
        status: '',
      },
      {
        title: 'Admin Category',
        image: cros_admin5,
        description:
          "This page displays all item categories, such as the 'iPhone' item which belongs to the 'smartphone' category. The page categorizes items, and clicking on a category shows all relevant items that belong to that category.",
        status: '',
      },
      {
        title: 'Admin Stuffs',
        image: cros_admin6,
        description:
          'From this page, the admin can create staff users, and also view all the staff information, including profile pictures.',
        status: '',
      },
      {
        title: 'Admin Create',
        image: cros_admin7,
        description:
          'The admin can create all stock items from this page, such as category, brand, item, and order.',
        status: '',
      },
      {
        title: 'Staff Dashboard',
        image: cros_staff1,
        description:
          'This page displays all the statistics for a single staff member, including how many items they have sold, how many items they have pending, and the total amount of sales.',
        status: '',
      },
      {
        title: 'Staff Orders',
        image: cros_staff2,
        description:
          "This page features two categories for orders: 'paid' and 'pending.' All orders are sorted into either of these two categories.",
        status: '',
      },
      {
        title: 'Staff Orders Pending',
        image: cros_staff3,
        description:
          'This page displays all the pending orders, and staff have the option to remove or edit pending orders.',
        status: '',
      },
      {
        title: 'Staff Orders Paid',
        image: cros_staff4,
        description:
          'This page displays all the pending orders that have been sold by the current staff member. Paid orders cannot be edited.',
        status: '',
      },
      {
        title: 'Staff Category',
        image: cros_staff5,
        description:
          "This page displays all item categories, such as the 'iPhone' item which belongs to the 'smartphone' category. The page categorizes items, and clicking on a category shows all relevant items that belong to that category.",
        status: '',
      },
      {
        title: 'Staff Customers',
        image: cros_staff6,
        description:
          'This page allows the staff to create customers and view the information of only those customers for whom they have sold items.',
        status: '',
      },
      {
        title: 'Staff Create',
        image: cros_staff7,
        description:
          'The staff can create only order from this page. Admin has the permission to create all the other things.',
        status: '',
      },
    ],
  },

  /** 
  ===================================== PROJECT 8 =====================================
  **/
  {
    id: 8,
    title: 'Tsks',
    alt: '',
    description:
      "When I want to learn something, I don't have an application that helps me set a clear study path. While I like applications such as Notion, it has too many features that can be overwhelming. Therefore, I am building an application that can manage all my course materials and tasks while providing a minimalistic study path.",
    thumbnail: tsks_thumbnail,
    image: tsks_thumbnail,
    placeholder: placeholder,
    source: 'https://github.com/rupam-seal/Tsks.git',
    live: '',
    status: 'Currently, it is in a development stage',
    tools: [
      'React.js',
      'Django',
      'JavaScript',
      'HTML',
      'CSS',
      'Vercel',
      'Railway',
    ],
    year: '2023',
    category: 'web',
    feature: [
      {
        title: 'Figma Design',
        image: tsks_figma,
        description:
          'Some of the pages have not been built yet as I am currently working on this project. The image I am referring to is my Figma design file for Tsks.',
        status: 'figma design',
      },
      {
        title: 'Figma Design - Dashboard',
        image: tsks_demo1,
        description:
          'On this dashboard, users can view all their tasks, search for specific tasks using a search bar, and click on a task to view its details.',
        status: 'Developement stage',
      },
      {
        title: 'Developement - Dashboard',
        image: tsks_developement1,
        description:
          'On this dashboard, users can view all their tasks, search for specific tasks using a search bar, and click on a task to view its details.',
        status: 'Developement stage',
      },
      {
        title: 'Dashboard - Task Status',
        image: tsks_developement1,
        description:
          "Each task on the dashboard includes subtasks. Users can create subtasks under a task to organize their work. The status of a task can be not-started, in-progress, or completed. For instance, if a user wants to learn Physics, they can create a task named 'Physics' and add subtasks for different topics. View below Images",
        status: 'Developement stage',
      },
      {
        title: 'Status Header Click',
        image: tsks_demo9,
        description:
          "Users can view and add comments on a particular task's status by clicking on its header. This allows users to provide additional information or updates related to the task's status.",
        status: 'Not yet built',
      },
      {
        title: 'Not Started Tasks',
        image: tsks_demo4,
        description:
          "On this dashboard, users can view and edit all their not-started tasks. A not-started task displays its status, due date, and a link to its details. If a user starts working on a subtask under a not-started task, the task's status is changed to in-progress.",
        status: 'Not yet built',
      },
      {
        title: 'In Progress Tasks',
        image: tsks_demo2,
        description:
          'Users can view and edit all their in-progress tasks on this dashboard. Each in-progress task contains status, due-date, and a item link.',
        status: 'Not yet built',
      },
      {
        title: 'Completed Tasks',
        image: tsks_demo3,
        description:
          'To complete a task, users must complete all of its subtasks that are marked as in-progress. Once a task is marked as completed, users cannot edit it. However, they can still view its details on the dashboard.',
        status: 'Not yet built',
      },
      {
        title: 'Sidebar Create Task Clicked Page',
        image: tsks_demo6,
        description:
          'Users can create new tasks and add subtasks to them. See Below Image...',
        status: 'Not yet built',
      },
      {
        title: 'Subtask',
        image: tsks_demo7,
        description:
          'Subtasks can be used to break down a task into smaller, manageable pieces of work.',
        status: 'Not yet built',
      },
      {
        title: 'Sidebar Tasks Item Clicked Page',
        image: tsks_demo5,
        description:
          'The left sidebar of the dashboard displays a list of recently created tasks. Users can quickly click on a task in the list to view its subtask details.',
        status: 'Not yet built',
      },
      {
        title: "Sidebar Label Create '+' Button",
        image: tsks_demo8,
        description: "User can also create a label using sidebar '+' button",
        status: 'Not yet built',
      },
      {
        title: 'Search Page',
        image: tsks_demo10,
        description:
          'Although the application includes a search bar to find specific tasks, I have also added a search button to the sidebar. This provides users with additional search features and options as the development progresses.',
        status: 'Not yet built',
      },
      {
        title: 'User Profile Page',
        image: tsks_demo11,
        description:
          "On this page, users can update their profile information and perform actions such as logging out or registering for the application. If a user clicks the 'logout' button, they will be redirected to the login page.",
        status: 'Not yet built',
      },
    ],
  },
];

// info: [
//   // { id: 'heading', content: 'Problem', level: '4' }
// ],
