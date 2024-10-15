// import { useState } from 'react';
// import BucketForm from './BucketForm';

// function Bucket(props) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: '',
//     eagerness: '',
//   });

//   console.log(props.bucket);

//   const submitUpdate = (value) => {

//     // TODO: Write logic to call the editBucketItem prop with the supplied values

//     // TODO: Set the key:value pairs in the `edit` object back to empty strings

//   };

//   // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
//   if (edit.id) {
//     return <BucketForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return props.bucket.map((item, index) => (
//     // TODO: Add a className of `bucket-row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
//     // TODO: Add a key attribute set to the value of the index position
//     // Hint: use a ternary operator
//     <div className={} key={}>

//       {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
//       <div key={} onClick={}>
//           {/* TODO: Add the item text here */}
//       </div>
//       <div className="icons">
//         {/* TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
//         <p onClick={}> ✏️</p>
//         {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
//         <p onClick={}> 🗑️</p>
//       </div>
//     </div>
//   ));
// }

// export default Bucket;
import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  const submitUpdate = (value) => {
    // Call the editBucketItem prop with the updated values (id, value, eagerness)
    props.editBucketItem(edit.id, value);

    // Reset the `edit` state back to default
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  // If the user is editing an item, render the form with current values
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div
      className={`bucket-row ${item.isComplete ? 'complete' : ''} ${item.eagerness}`}
      key={index}
    >
      {/* Complete the item on click */}
      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {/* Edit button */}
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}>
          ✏️
        </p>
        {/* Delete button */}
        <p onClick={() => props.removeBucketItem(item.id)}>
          🗑️
        </p>
      </div>
    </div>
  ));
}

export default Bucket;
