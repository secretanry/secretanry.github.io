<script>
    import { onMount } from 'svelte';

    let comic = {
        safe_title: '',
        img: '',
        alt: '',
        year: 0,
        month: 0,
        day: 0
    };

    onMount(async () => {
        const email = encodeURIComponent('m.gladyshev@innopolis.university');
        const url = `https://fwd.innopolis.university/api`
        const apiIDEndpoint = `${url}/hw2?email=${email}`;
        const apiComicEndpoint = `${url}/comic`;

        const response = await (await fetch(apiIDEndpoint)).text();

        const comicResponse = await fetch(`${apiComicEndpoint}?id=${response.trim()}`);
        const data = await comicResponse.json();
        comic = {
            safe_title: data.safe_title,
            img: data.img,
            alt: data.alt,
            year: data.year,
            month: data.month,
            day: data.day
        };
    });
</script>

<section id="comic">
    <h2>Comic</h2>
    {#if comic.safe_title}
        <div id="comic-container" class="comic-container">
            <h3>{comic.safe_title}</h3>
            <img src={comic.img} alt={comic.alt} />
            <p>Published on: {new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString()}</p>
        </div>
    {:else}
        <p>Loading...</p>
    {/if}
</section>
