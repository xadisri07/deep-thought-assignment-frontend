export async function getProjectData() {
  const url = "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";
  console.log(url);
    const response = await fetch(url,  {
        headers: {
          'Content-Type': 'application/json',
        },
      },);
    console.log(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  console.log(data);
  return data;
}

export default getProjectData;