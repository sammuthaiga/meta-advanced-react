function DessertsList(props) {
    const { data } = props;
    // Implement the component here.
    const sortedDesserts = data.filter(dessert => dessert.calories <= 500).sort((a, b) => a.calories - b.calories);
    const newDessertList = sortedDesserts.map(dessert => {
      const theList = `${dessert.name} - ${dessert.calories} cal`
      return <li>{theList}</li>
    }
    )
   
    return (
      <div>
        <ul>
          {newDessertList}
        </ul>
       </div>
     );
  }
  
  export default DessertsList;
  