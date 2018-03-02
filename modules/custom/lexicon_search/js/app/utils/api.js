
export async function getDrugs() {

  try {
    const response = await fetch('/api/lexicon/view');
    return response.json();
  }
  catch(e) {
    console.log('Error!', e);
  }
}
