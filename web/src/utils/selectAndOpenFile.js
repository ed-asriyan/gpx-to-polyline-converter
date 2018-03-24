export default function({accept}) {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input['type'] = 'file';
    input['accept'] = accept;
    input.onchange = e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          const contents = e.target.result;
          resolve(contents);
        };
        reader.readAsText(file);
      } else {
        reject();
      }
    };
    input.click();
  });
}
