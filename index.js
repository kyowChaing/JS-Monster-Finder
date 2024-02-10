        //creatin HTML element ussing JS and render it into HTML page 
        // creating monsters div with document.createElement() and append div  into in HTML page
        //

        import { monsters } from './monsters.js'; //Uncaught SyntaxError: Cannot use import statement outside a module use type='module' in script tag

        // dynamicaly show monstar data according monsters arry into HTML page
        for (const monster of monsters) {
            showMonsters(monster);//passing monster data into showMonsters() to render dynamic data
        }

        // now edit shoowMonsters() function for dynamic value
        function showMonsters(monster){
            const monsterDiv= document.createElement('div');
            monsterDiv.className='monster';

            const img=document.createElement('img');
        //dynamic image show according monster ID. useing backtic[` `] templete
            img.src=`https://robohash.org/${monster.id}?set=set2" alt="MD. Sakib Khan`; 
            img.alt=monster.name;

            const nam = document.createElement('p');
            nam.className='name';
         //dynamic name show according monster name
            nam.innerText=monster.name;

            const email=document.createElement('p');
            email.className='email';
         //dynamic email show according monster email
            email.innerText=monster.email;

            monsterDiv.append(img,nam,email);
            document.querySelector('.monsters').append(monsterDiv); 
        }
    
        notFound();
        function notFound(){
            const notFoundDiv=document.createElement('div');
            notFoundDiv.className='p-5 not-found';
            notFoundDiv.style.display=`none`;

            const span=document.createElement('span');
            span.innerText='404';

            const h1=document.createElement('h1');
            h1.innerText='🧟‍♂️ No Monster Found 🧟‍♂️';

            notFoundDiv.append(span,h1);
            document.querySelector('.monsters').append(notFoundDiv);
        }

        // when user search for minster 

        // when user type into search bar for monsters, filter monsters page / div 
        // so select search id and add keyup event listener by querySelector to take input and select monsters div to compared 
        // data if found then show without loading page and if not show not found page by changing display property value

        document
            .querySelector('#search-monster')
            .addEventListener('keyup',function(e){
                // take user search keyword
                const keyword = e.target.value.toLowerCase();
                // console.log(keyword);

                // select all monster that exist in html page by class name 
                const monsters = document.querySelectorAll('.monster');

                // now check if keyword match with exixting monsters by name or email element value
                let notFound=true;
                for (const monster of monsters) {
                    // console.log(monster); //it log all monster exiting div
                    // console.log(monster.children); //it logs exiting child element as array [here is img,p,p ]also whow class name

                    // access monster div child element inner text / value in lower case
                    const name=monster.children[1].innerText.toLowerCase();
                    const email=monster.children[2].innerText.toLowerCase();

                    // console.log(name, email);

                    // now check if any match then make display block otherwise none
                    if (name.includes(keyword)||email.includes(keyword)) {
                        monster.style.display='block';
                        notFound=false;

                    } else {
                        monster.style.display="none";
                        
                    }
                    if (notFound) {
                        document.querySelector('.not-found').style.display='block';

                    } else {
                        document.querySelector('.not-found').style.display='none';
                    }

                }
            })
            
    
            // avoid defaul form submit auto reload
            document
            .querySelector('#search-monster-form')
            .addEventListener('submit',(e)=>{e.preventDefault();});

        // first select search_input tag to take user quary then filter from monsters div and if found back result 
        // into monsters div otherwise show not found div by making display none style



