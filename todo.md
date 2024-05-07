PERSONAL BLOG
1) load the app
    - landing page with a form 
                            - lables
                            - inputs
                                - username
                                - blog titles
                                - blog content
2) subiting the form
    - stored in localStorage (JS)
3) form submits
    -  redirected to the post page
4) submit without a username, title or contect
    - message that prompts me to complete the form
5) view the post page
    - header, light mode/dark mode toggle, and back button
6) click the light mode/dark mode toggle (html, css, js)  html (put it in the body)
                                                                <button class="btn">
                                                                <img class="moon" src="(https://static.vecteezy.com/system/resources/previews/006/554/285/original/happy-crescent-moon-cartoon-design-icon-smile-crescent-moon-cartoon-isolated-on-starry-night-background-crescent-moon-cartoon-on-night-background-free-vector.jpg) alt="moon"></img>
                                                                <img class="sun" src="(https://science.nasa.gov/wp-content/uploads/2023/05/sun-cartoon-crop.png?w=4096&format=png&crop=1)" alt="sun"></img>
                                                                </button>
                                                                <button onclick="myFuntion()">
                                                                <button type="button"> ".btn" </button>
                                                          css (
                                                            body {
                                                                padding: 25px;
                                                                backgroud-color: white;
                                                                color: black;
                                                                font-size 25px
                                                            }
                                                          )
                                                          .dark-mode{
                                                            background- color: black;
                                                            color: white;
                                                          }
                                                          js () function myFunction() {
                                                            const element = document.body
                                                            element.classList.toggle("dark-mode")
                                                          }
    - page content's styles reflect the selection
7) click the back button
    - redirected back to the landing page input more blogs  <input type ="button" value="back" onclick="history">
8) view main content
    - list of blog post are pulled from localStorage
9) view loaclStorage
    - JSON array of blog post objects (js)
                            - including
                                - author's username
                                - title of the post
                                - post's content
10) take a look at a single blog entry
    - i can see the
                    - title 
                    - content
                    - author
11) the footer
    - link to the developer's portfolio (html)

  aritcle - 1-4
    h2 - header blog title   JS
    contect - blog
    p  - autour name
    
  onclick"function in js"
  elementbyid 