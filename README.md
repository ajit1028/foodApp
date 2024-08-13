# foodApp

- ^ - for minor upgrades
- ~ - major upgrades
- -D - for dev dependencies(Used specifically in developement)
- package.json - contains the current version of dependency
- package.lock.json - contains the exact version info of dependencies

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement (Continuous Refreshing)
- File Watching Algorithm - Written in C++
- Caching - Faster Build - Each time reducing build time
- Image Optimization - Loads image faster
- Minification
- Bundling - Most important work of Parcel
- Compressing Files
- Consistent Hashing
- Code spilting
- Differential Bundling - to support older browsers, different platforms like mobile, pc, tablets etc.
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove unused code
- Differeent dev and prod bundles

# Functional Component

- It is a normal function of javascript which returns a piece of code of JSX.
- We can use normal function and arrow functions.
- Component composition -> Component inside component.
- We can use React Element inside another React Element.
- React Ele inside Component.
- Component inside React Ele -> or Component() or </ ComponentName>

# Config-driven UI

- Creating user interface based of the config files such as API data

# Props in React - Dynamic Data in components

- We can pass arguments like we do in functions inside component because at the component is a function
- All the props are bundled into one single object before passing it to component

# Food Ordering App

-App Layout
-Header
-Logo
-Nav Itmes
-Body
-Search bar
-RestaurantContainer
-Restaurant Card
-image
-Restaurant Name,Cuisines
-Rating, Delivery Time
-Footer
-Copywrite
-Links
-Contact

# Two Types of Export/Import

- Deafult Export/Import

- export default Component
- import Component from "path"
- Named Export/Import -> For mutilple exports and imports

- export sont Component -> means (variable, component)
- import {component} from "path"

# React Hooks

- (Normal JS utility functions)

- State variables -> Whenever the state variable got updated React Rerenders that component

- useState()
  -Superpowerful state variable in React
  -Do not declare the use state outside a component because useState is meant to be local variable of a component
  -Try to declare it in the begining of component

- useEffect()
  -If dependency array is not present it will be called each time the component is rendered
  -If dependency array is empty It will be called after the initial render(only at once)
  -If dependency array contains a function, Object etc It will be called at initial render and each time the dependency Object, function get updated.

# 2 Types of Routing

- Server Side Routing - making networks calls fetching data and then populating
- Client Side Routing - Loading or interchaning the components
- React is called single page application because only components get interchanged but the whole page did not get reloaded again and again.

# Class based Components

-A normal class which extends React.Component have constructor and methods like render, componentDidMount methods

# Life Cycle of Class based Components

- Mounting
- Updating
- Unmounting

  - constructor -> render -> componentDidMount

  - For embeded components
  - parent constructor -> parent render -> child constructor, child -> render, child componentDidMount -> parent ComponentDidMount
  - parent componentDidMount
