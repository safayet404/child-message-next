export default function VideoNews({ video_link }: { video_link: string }) {
  const videoId = video_link.split("v=")[1]?.split("&")[0];

  // Construct the embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div
      className="rounded-md"
      style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
    >
      <iframe
        src={embedUrl}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
        title="Video"
        className="rounded"
      />
    </div>
  );
}
