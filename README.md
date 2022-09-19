# Simple Application
## Tech
>1. Typescript
>2. React
>3. Redux

## Requirements
>1. Navigation Header
>2. Footer
>3. Page
>   1. Tab 1
>      1. Has a form
>      2. Form contains these fields
>         1. Full name
>         2. Email
>         3. Phone
>         4. Address
>      3. Form has submit button
>      4. On submit
>         1. Appropriate form validation happens
>         2. Make JSON POST request to this endpoint:
>            <code>http://developers.gictsystems.com/api/dummy/submit/
>            </code>
>         3. Show returned responses in an alert: success or fail in this case
>         4. Page should not refresh on submit
>   2. Tab 2
>      1. A table representing a list of items
>      2. The list refreshes every 10 seconds without reloading the page
>      3. The list is retrieved from the following endpoint:
>           <code>http://developers.gictsystems.com/api/dummy/items/
>           </code>
>      4. Provide this Bearer token on header.
>       <code>ALDJAK23423JKSLAJAF23423J23SAD3</code>
>      5. Each row has an edit button.

### Running it locally.
> 1. Enable CORS on the end points mentioned above
> 2. Clone the repo navigate into the folder <br/>
>   <code>git clone https://github.com/GodzillaJim/gict-app.git && cd gict-app</code>
> 3. Install dependencies. If using npm, run
>   <code> npm install </code> or if running yarn, run <br/>
>   <code> yarn install</code>
> 4. Visit <code>localhost:3000</code> to view site.
> 5. If you want to work with fake data instead of live APIs, switch to branch main.
>   <code>git checkout main</code>
