export const projects = [
  {
    id: 1,
    title: 'Imo',
    thumbnail: '/assets/images/imo/thumbnail.png',
    image: '/assets/images/imo/thumbnail.png',
    source: 'https://github.com/rupam-seal/imo',
    live: '',
    status:
      "Future plans: Add new features, such as image details and image sharing options, to enhance users' experience.",
    description:
      "Imo is a image classification website. Users can easily upload their images and get instant results about the image's content, allowing them to organize their collections more efficiently.",
    tags: ['Django', 'JavaScript', 'HTML', 'CSS'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Upload Image',
        image: '/assets/images/imo/demo1.png',
        description:
          'Users can upload one or more images to Imo, and the website will classify them into their respective categories using the VGG-16 convolutional neural network. VGG-16 is a deep neural network that consists of 16 layers and is commonly used for image recognition tasks due to its high accuracy and performance.',
        status: '',
      },

      {
        id: 2,
        title: 'Category',
        image: '/assets/images/imo/demo2.png',
        description:
          'Imo will categorize all the uploaded images into their respective categories, and users can view the items in each category individually by selecting the desired category. This feature will allow users to easily organize their images and quickly locate specific items of interest.',
        status: '',
      },

      {
        id: 3,
        title: 'Images',
        image: '/assets/images/imo/demo3.png',
        description:
          'This page displays the images belonging to a particular category, enabling users to browse through them easily.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/w7nT0l8yMFk',
  },

  {
    id: 2,
    title: 'Cointra',
    thumbnail: '/assets/images/cointra/thumbnail.png',
    image: '/assets/images/cointra/thumbnail.png',
    source: 'https://github.com/rupam-seal/CoinTra',
    live: 'https://cointra.netlify.app/',
    status: 'Future plans: Add a top 5 coins carousel and chat option.',
    description:
      'CoinTra provides real-time information on the top 200 cryptocurrencies, including their current value, market cap, volume, and other key metrics. Users can search for specific coins using the search function.',
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Main page',
        image: '/assets/images/cointra/demo1.png',
        description:
          'Users can view the real-time status of all cryptocurrencies, as well as use the search function to quickly locate information on a specific coin.',
        status: '',
      },

      {
        id: 2,
        title: 'Single Coin page',
        image: '/assets/images/cointra/demo2.png',
        description:
          'The website provides a single coin page that displays key metrics such as price change percentage, market cap value, and volume, along with a historical chart to track price trends. To fetch historical data, the website uses the Axios library, which enables efficient and reliable data retrieval.',
        status: '',
      },

      {
        id: 3,
        title: 'Pagination',
        image: '/assets/images/cointra/demo3.png',
        description:
          'To enable seamless navigation between pages, the website utilizes a component built using Material UI, a popular React-based design framework.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/xHz6DkeAF44',
  },

  {
    id: 3,
    title: 'ThreeD',
    thumbnail: '/assets/images/threed/thumbnail.png',
    image: '/assets/images/threed/thumbnail.png',
    source: 'https://github.com/rupam-seal/drone-website',
    live: 'https://threedrone.netlify.app/',
    status:
      'Future plans: Add top 5 coins carousel and add more feature like chat options and more.',
    description:
      'This landing page for a drone website is built using React and Three.js, providing a modern and interactive user interface.',
    tags: ['React.js', 'Three.js', 'Blender', 'JavaScript', 'HTML', 'CSS'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Main page',
        image: '/assets/images/threed/thumbnail.png',
        description:
          'Currently this website have only one page. In the future i am thinking to add more features and pages.',
        status: '',
      },
      {
        id: 1,
        title: 'Rotation of Propeller',
        gif: '/assets/images/threed/fly.gif',
        description:
          'If any user hover on drone glb model propeller rotation start.',
        status: '',
      },
      {
        id: 1,
        title: 'Change color',
        gif: '/assets/images/threed/color.gif',
        description:
          'Click button to change drone color blue, red, yellow, green',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/NCiPE6CgJy8',
  },

  {
    id: 4,
    title: 'Card Printing',
    thumbnail: '/assets/images/cardprinting/thumbnail.png',
    image: '/assets/images/cardprinting/thumbnail.png',
    source: 'https://github.com/rupam-seal/CardPrinting',
    live: '',
    status:
      'Future plans: Add top 5 coins carousel and add more feature like chat options and more.',
    description: 'A drone website landing page using React and Three.js',
    tags: ['Python', 'Three.js'],
    year: '2023',
    category: 'desktop',
    feature: [
      {
        id: 1,
        title: 'Login Page',
        image: '/assets/images/cardprinting/login.png',
        description:
          'User can login from this page and after login user is redirected to home page',
        status: '',
      },
      {
        id: 2,
        title: 'Home Page',
        image: '/assets/images/cardprinting/main.png',
        description:
          'User can enter value and after click on print software will print hardcopy of the card with printer.',
        status: '',
      },
      {
        id: 3,
        title: 'Print page',
        image: '/assets/images/cardprinting/print.png',
        description:
          'After clicking on print button it will generate a new card from above information.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/CnM-VT5AU4Y',
  },

  {
    id: 5,
    title: 'Portfolio 2022',
    thumbnail: '/assets/images/portfolio2022/thumbnail.png',
    image: '/assets/images/portfolio2022/thumbnail.png',
    source: 'https://github.com/rupam-seal/portfolio-2022.git',
    live: 'https://nilax-2022.netlify.app/',
    status:
      'Need to update code, refractor complete project and improve performance.',
    description: 'Portfolio website made with reactjs',
    tags: ['Python', 'Three.js'],
    year: '2023',
    category: 'web',
    feature: [
      {
        id: 1,
        title: 'Login Page',
        image: '/assets/images/cardprinting/login.png',
        description:
          'User can login from this page and after login user is redirected to home page',
        status: '',
      },
      {
        id: 2,
        title: 'Home Page',
        image: '/assets/images/cardprinting/main.png',
        description:
          'User can enter value and after click on print software will print hardcopy of the card with printer.',
        status: '',
      },
      {
        id: 3,
        title: 'Print page',
        image: '/assets/images/cardprinting/print.png',
        description:
          'After clicking on print button it will generate a new card from above information.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/CnM-VT5AU4Y',
  },

  {
    id: 6,
    title: 'Orbit',
    thumbnail: '/assets/images/orbit/thumbnail.png',
    image: '/assets/images/orbit/thumbnail.png',
    source: 'https://github.com/rupam-seal/portfolio-2022.git',
    live: '',
    status:
      'Need to update code, refractor complete project and improve performance.',
    description: 'Portfolio website made with reactjs',
    tags: ['Python', 'Three.js'],
    year: '2023',
    category: 'android',
    feature: [
      {
        id: 1,
        title: 'Login Page',
        image: '/assets/images/cardprinting/login.png',
        description:
          'User can login from this page and after login user is redirected to home page',
        status: '',
      },
      {
        id: 2,
        title: 'Home Page',
        image: '/assets/images/cardprinting/main.png',
        description:
          'User can enter value and after click on print software will print hardcopy of the card with printer.',
        status: '',
      },
      {
        id: 3,
        title: 'Print page',
        image: '/assets/images/cardprinting/print.png',
        description:
          'After clicking on print button it will generate a new card from above information.',
        status: '',
      },
    ],
    video: 'https://www.youtube.com/embed/CnM-VT5AU4Y',
  },
];

// info: [
//   // { id: 'heading', content: 'Problem', level: '4' }
// ],
