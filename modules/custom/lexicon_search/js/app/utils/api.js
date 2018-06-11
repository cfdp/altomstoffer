export async function getDrugs() {

  try {
    const response = await fetch('/api/lexicon/view?_format=json');
    return response.json();
  }
  catch(e) {
    console.log('Error!', e);
  }
}
