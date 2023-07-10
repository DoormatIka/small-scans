<script>
    import { base } from "$app/paths";

    const mangadex = [
        {
            name: "Healer-Chan Whose Urge To Urinate Is Steadily Increasing In The Middle of The Final Boss Fight",
            img: `${base}/assets/mangadex/urinate.jpg`,
            link: "https://mangadex.org/title/511603da-3e09-4089-bc39-7ee085c475a8/healer-chan-whose-urge-to-urinate-is-steadily-increasing-in-the-middle-of-the-final-boss-fight"
        },
        { 
            name: "Setting Things Straight with Brats",
            img: `${base}/assets/mangadex/brats.jpg`,
            link: "https://mangadex.org/title/ba4c82bb-cfdc-445f-b1bd-8e152623966a/setting-things-straight-with-brats"
        },
        { 
            name: "I Became A College Professor At 14 Years Old, Because I'm A Genius",
            img: `${base}/assets/mangadex/professor.jpg`,
            link: "https://mangadex.org/title/e7c983ba-ca3a-47e0-bd74-eb38ef18faba/i-became-a-college-professor-at-14-years-old-because-i-m-a-genius"
        },
        {
            name: "The Girl Without Relatives",
            img: `${base}/assets/mangadex/girl.jpg`,
            link: "https://mangadex.org/title/86794e91-d1b6-4b59-89d2-a52af7cc670d/the-girl-without-relatives"
        },
        {
            name: "Until This Social Outcast Becomes My Wife...",
            img: `${base}/assets/mangadex/social.jpg`,
            link: "https://mangadex.org/title/6f840f35-52d2-4795-86eb-47fc2c7cd4b0/until-this-social-outcast-becomes-my-wife"
        }
    ];
</script>

<div class="flex items-center justify-between">
    <div class="flex items-center space-x-4">
        <img src="/assets/arrow-right-circle.svg" alt="Red ball" class="pb-1 h-10 w-10 hover:translate-x-2 transition-all ease-in collapse sm:visible" />
        <h3>SmallScans</h3>
    </div>
    <div class="flex items-center space-x-4">

        <div 
            class="flex flex-row gap-2 group"
            on:mouseenter={() => {
                document.getElementById("discord")?.classList.add('fa-flip');
            }}
            on:mouseleave={() => {
                document.getElementById("discord")?.classList.remove('fa-flip');
            }}
            role="link"
            tabindex=0
        >
            <i 
                class="fa-brands fa-discord pt-1 text-blue-400/50 group-hover:text-blue-400 transition-colors ease-in" 
                id="discord"
            />
            <p class="text-blue-400/50 group-hover:text-blue-400 transition-all ease-in">Discord</p>
        </div>

        <div 
            class="flex flex-row gap-2 group"
            on:mouseenter={() => {
                document.getElementById("twitter")?.classList.add('fa-flip');
            }}
            on:mouseleave={() => {
                document.getElementById("twitter")?.classList.remove('fa-flip');
            }}
            role="link"
            tabindex=0
        >
            <i 
                class="fa-brands fa-twitter pt-1 text-cyan-300/70 group-hover:text-cyan-300 transition-colors ease-in" 
                id="twitter"
            />
            <p class="text-cyan-300/70 group-hover:text-cyan-300 transition-all ease-in">Twitter</p>
        </div>

        
        <div class="pr-4"></div>
    </div>
</div>
<br><br><br>
<div class="pl-5">
    <h1>Quality scanlations delivered via <span class="text-orange-400 hover:text-orange-500 transition-all ease-in">MangaDex.</span></h1>
    <p class="pt-2">And the Discord too.</p>
    <br><br>
    <div class="flex justify-center">
        <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 w-max">
            {#each mangadex as {img, link, name}, i}
                <div class="border p-2 w-52 break-words text-center space-y-2 flex flex-col justify-between">
                    <img 
                        src={img}
                        alt="Thumbnail"
                        class=" w-full"
                    />
                    <a href={link}>
                        <h4 class="pt-3 hover:text-accent text-white transition-all">{name}</h4>
                    </a>
                </div>
            {/each}
        </div>
    </div>

    <div>
        <div class="border">

        </div>
    </div>
</div>