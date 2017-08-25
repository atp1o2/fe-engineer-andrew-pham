This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions

For this performance challenge, only work on the SectionList component. Don't worry about the NavBar or SideBar

### Setup
```
$ yarn install
```

### Running the App
```
$ yarn start
```

Start Time: 10:20AM PST Fri Aug 25th

### ATP Notes
- [Flexbox Grid](https://github.com/kristoferjoseph/flexboxgrid)
  - Would use "React Flexbox Grid" or React-Bootstrap, but I don't have access to configure webpack! So importing flexbox grid css manually

- [Styled Components](https://github.com/styled-components/styled-components)
  - I like using styled components to really encapsulate and localize the css
  - Using scss for normalization, utility classes, and determining brand variable colors

Strategy
- Install dependencies
- Create component boilerplates and nest them
- Basic style and responsive skeleton
- Import mock data
- Implement Accordion drop down feature with SectionHeaders mock data
- Pass Topic data to pure components
- Style!
- Implement Search


Components
---
- SectionList (container, stateful)
  - SectionHeader (props, accordion drop down)
  - SectionTopic (pure)

  - SectionSearch (Filters out which states get passed to SectionHeader)
    - Single Input Field

