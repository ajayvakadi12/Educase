const editPhotoButton = document.getElementById('editPhoto');
const photoInput = document.getElementById('photoInput');
const profilePhoto = document.getElementById('profilePhoto');

editPhotoButton?.addEventListener('click', () => {
  photoInput?.click();
});

photoInput?.addEventListener('change', () => {
  if (!photoInput.files?.length) return;
  const file = photoInput.files[0];

  // Preview the selected image
  const url = URL.createObjectURL(file);
  if (profilePhoto) profilePhoto.src = url;

  // TODO: Hook this up to a real upload flow.
  console.log(`Selected profile picture: ${file.name}`);
});
