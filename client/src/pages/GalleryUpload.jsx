export default function GalleryUpload() {
  return (
    <div>
      <h1>Upload Gallery</h1>
      <form>
        <label>Gallery Name:</label><input type="text" />
        <label>Upload Images:</label><input type="file" multiple />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
