/* eslint-disable @typescript-eslint/no-unused-vars */
$(function () {
  tinymce.init({
    selector: 'textarea',
    plugins:
      'powerpaste casechange searchreplace autolink directionality visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap linkchecker emoticons advtable export autosave code importcss',
    toolbar:
      'undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image | alignleft aligncenter alignright alignjustify | code',
    [`**content_css`]: ['/css/main.css', 'https://cdn.tailwindcss.com'],
  });
});

function setQueryString(queries) {
  const urlParams = new URLSearchParams(window.location.search);
  if (queries) {
    if (Array.isArray(queries)) {
      for (const query of queries) {
        params.set(query.name, query.value);
      }
    } else {
      for (const name in queries) {
        params.set(name, queries[name]);
      }
    }
  }
  return urlParams.toString();
}
