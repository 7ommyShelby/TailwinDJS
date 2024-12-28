const course = document.querySelector('.courses');

console.log(arr);

{/* <div class=" flex gap-2 max-w-full mt-4 bg-white rounded-lg p-2">

    <div class="w-[30%] rounded-lg overflow-hidden">
        <img class="h-full w-full" src="./sample.avif" alt="">
    </div>

    <div class="w-[70%]">
        <h2 class="font-semibold">Learning strategy : <span class="italic font-semibold">how</span>
            instead of what</h2>
        <p class="text-slate-500 text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur doloremque maxime nam tempora reprehenderit ab omnis atque sint dolorem,
            assumenda, repellendus nulla ipsam id officia?
        </p>
    </div>
</div> */}

function render() {

    arr.forEach((card) => {

        const cardDiv = document.createElement("div");
        cardDiv.className = "flex gap-5 max-w-full mt-4 bg-white rounded-lg p-2";

        const imgDiv = document.createElement('div')  //imgDivCon Parent
        imgDiv.className = 'w-[30%] rounded-lg overflow-hidden'

        const imgCon = document.createElement('img') //imgRaw child
        imgCon.className = 'h-full w-full'
        imgCon.setAttribute('src', card.img);


        const contentDiv = document.createElement("div");
        contentDiv.className = "w-[70%]";

        const heading = document.createElement("h2");
        heading.innerHTML = `${card.heading}`;
        heading.className = "font-semibold text-lg";

        const para = document.createElement("p");
        para.textContent = card.para;
        para.className = "text-slate-500 text-sm mt-1";

        const meta = document.createElement("div");
        meta.className = "mt-3 flex justify-between text-gray-700 text-sm";
        const rateDiv = document.createElement('div');
        rateDiv.className = 'flex gap-1 items-center'

        let x = card.rating;

        for (let i = 0; i < 5; i++) {
            const rate = document.createElement('span');
            // rate.innerHTML = `<i class="fa-solid fa-star"></i>`
            rate.innerHTML = `<span class="text-base material-symbols-outlined">star</span>`
            rate.className = 'text-slate-400'

            if (i < x) {
                rate.className = "text-yellow-500"
            }
            rateDiv.appendChild(rate)
        }

        const star = document.createElement('strong')
        star.innerText = card.rating
        star.className = 'text-sm ml-2'
        const vote = document.createElement('span')
        // vote.innerText = `(${card.votes})`
        vote.innerText = `(${Math.floor(Math.random() * 10000)})`
        vote.className = "text-sm text-gray-500"

        rateDiv.append(star, vote)

        // <strong class="text-base">3</strong>
        // <span class="text-base text-gray-500">(294)</span>

        const level = document.createElement('span');
        level.className = 'capitalize text-slate-500 content-center text-xs px-2 py-1 font-extralight bg-slate-200 rounded-md'
        level.innerText = card.level


        meta.append(rateDiv, level);

        contentDiv.append(heading, para, meta);
        // contentDiv.appendChild(para);
        // contentDiv.appendChild(meta);

        cardDiv.appendChild(imgDiv);
        imgDiv.appendChild(imgCon)
        cardDiv.appendChild(contentDiv);

        course.appendChild(cardDiv);
    })
}

render();
