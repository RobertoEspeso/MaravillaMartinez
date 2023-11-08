const API =
  "https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCCPxRsWDfST0JfSSiHRvoEw";

const content = null || document.getElementById("content");
const descriptionChannel =
  null || document.getElementById("descriptionChannel");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6a42146a3msh115e7d9b56fe313p1b5a21jsn886f5cd18067",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let descriptionChannelApi = videos.meta.description;
    descriptionChannel.innerHTML = descriptionChannelApi;
    let view = `
    ${videos.data

      .map(
        (video) =>
          `
        <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.thumbnail[3].url}" alt="${video.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-slate-400">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.title}
          </h3>
        </div>
      </div>
        </a>
    `
      )
      .slice(0, 12)
      .join("")}
      `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
