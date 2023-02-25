# Kontent.ai • Assignment 

### Table of Contents 
→ [Setup](#setup) </br>
→ [Code Changes](#code-changes) </br>
↓ [Src Folder](kontent-sample-app-react/src) </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • [Articles.tsx](kontent-sample-app-react/src/Pages/Articles.tsx) </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • [Cafes.tsx](kontent-sample-app-react/src/Pages/Cafes.tsx) </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • [Contacts.tsx](kontent-sample-app-react/src/Pages/Contacts.tsx) </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • [index.css](kontent-sample-app-react/src/index.css) </br>

<i> Only displaying edited pages from the src folder. ✨ </i> 


## Setup 
- [x] Create a new account in Kontent.ai
- [x] Create sample React app using tutorial provided.
- [x] Create sample site & connect to React app using Product ID

<i>  For demonstration purposes, I have left 'removed' code commented `//` as a point of reference.  ✨</i>

## Code Changes
- [x] Update the project code so the Cafes section lists all cafes within "Our cafes“ section (not in "Other places where you can drink our coffee").



![cafes](/docs/cafes.png)

<br>



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 49-51 • [Cafes.tsx](kontent-sample-app-react/src/Pages/Cafes.tsx)
```ts
    //   .filter(
    //   (cafe: Cafe) => cafe.elements.country.value === 'USA'
    // );
```
</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 54-57 • [Cafes.tsx](kontent-sample-app-react/src/Pages/Cafes.tsx)
```ts
    //   .filter(
    //   (cafe: Cafe) => cafe.elements.country.value !== 'USA'
    // );
```

- The above code examples show the removal of the `.filter` function. This function was filtering out the results that are being returned in the main containers to show only the results where the country value aligns with 'USA', and will not display results that do not `!==` equal 'USA'. By taking this out, it allowed the international locations to filter through into the main containers alongside the USA results. This wasn't enough to fix the request however, with only this change made, the results were returning to the page twice (once under each heading).

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 91-122 • [Cafes.tsx](kontent-sample-app-react/src/Pages/Cafes.tsx)
```ts
    // const partnerCafeModels = partnerCafes.map((cafe: Cafe) =>
    //   createCafeModel(cafe)
    // );

    // const partnerCafeLocations = partnerCafeModels
    //   .map((model: CafeModel) => model.location)
    //   .reduce((result: string[], location: string) => {
    //     if (result.indexOf(location) < 0) {
    //       result.push(location);
    //     }
    //     return result;
    //   }, [])
    //   .sort();

    // const partnerCafeComponents = partnerCafeLocations.map((location: string) => {
    //   const locationPartnerCafes = partnerCafeModels
    //     .filter((model: CafeModel) => model.location === location)
    //     .map((model: CafeModel, modelIndex: number) => {
    //       // return (
    //       //   <p key={modelIndex}>
    //       //     {model.name}, {model.street}, {model.phone}
    //       //   </p>
    //       // );
    //     });

    //   // return (
    //   //   <div key={location}>
    //   //     <h3>{location}</h3>
    //   //     {locationPartnerCafes}
    //   //   </div>
    //   // );
    // });
```
- In this code example, I have removed additional iterations of  `partnerCafeLocations` to keep the code DRY.

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 124-131 •  [Cafes.tsx](kontent-sample-app-react/src/Pages/Cafes.tsx)
```ts
    return (
        <div className="container">
        <h2>{formatMessage({ id: 'Cafes.ourCafesTitle' })}</h2>
        <div className="row">{companyCafeComponents}</div>
        /* <h2>{formatMessage({ id: 'Cafes.partnerCafesTitle' })}</h2> */
        /* <div className="row">{partnerCafeComponents}</div> */
        </div>
    );
```

- To stop the duplicate information from returning under the second page heading, I removed lines 28-29 from the code. 
#   

- [x] Create a new Article (lorem ipsum one with sample image) and let Articles section to list only 4 of them 

![articles](/docs/articles.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 52-62 •  [Articles.tsx](kontent-sample-app-react/src/Pages/Articles.tsx)
```ts
  const articlesComponent = articles[language].reduce(
    (result: JSX.Element[], article: ArticleType, index: number) => {
      if (index % 4 === 0) {
        result.push(<div className="clear" key={counter++} />);
      }

      if (counter >= 5) {
        return result;
      }
```

- A new article was created via kontent.ai using lorem ipsum. When looping through the articles, on every multiple of 4 an empty div is being pushed to the page. By adding the second conditional statement and counter (which has been set to greater than or equal to 5) it will display 4 articles to the page while taking into account the empty 4th div.

#

- [x] Make the background color of the main menu blue

![nav](/docs/nav.png)

# 

- [x] Play with the project as you wish and make other custom changes (optional).

![hover](/docs/hover.png)
![styling](/docs/styling.png)
![styling-2](/docs/styling-2.png)
![styling-3](/docs/styling-3.png)



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 1145-1151 •  [index.css](kontent-sample-app-react/src/index.css)
```typescript
    
   .application-content .menu {
     display: block;
     background: #3D6DA4;
     text-transform: uppercase;
     line-height: 3rem;
   }
```

1. Changed app theme from original red (#b24143) to the same blue used for the nav update (#3D6DA4). I thought this could be a nice way to provide a more cohesive user experience after changing the nav menu from red to blue. To make this happen, within the [index.css](kontent-sample-app-react/src/index.css) file I found the initial nav color background and then I copied & pasted the hexadecimal code into a CTRL+F search. From here, I located and replaced all of the instances of red (#b24143) with blue (#3D6DA4). The red used for the hover feature (#Ba5455) was also replaced with a darker variation of the blue used for the nav menu (#2f527a) as pictured. The same process was used to change the color of the nav menu.

</br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ⚡️ Code Snippet • Lines 23-26 •  [Contacts.tsx](kontent-sample-app-react/src/Pages/Contacts.tsx)
```typescript
    const query = Client.items<Cafe>()
      .type(contentTypes.cafe.codename)
      // .equalsFilter('elements.country', 'USA')
      .orderByDescending('system.name');
```

2. Updated 'Contacts' page to include the Madrid and London cafe locations under the 'Our Cafes' heading to match the 'Cafes' page. To do this, I navigated to the 'Contacts' page in the 'Pages' folder, and removed the country filter from line 25 which allowed the other locations to pull through to the display.

</br>

[Return to top](#kontentai--assignment)

#

<h5 align="center">

Lily Noël.

</h5>