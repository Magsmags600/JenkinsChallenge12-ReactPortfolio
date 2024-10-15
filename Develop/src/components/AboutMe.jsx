import { useState } from 'react';
import BucketForm from './Header';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    const newBucket = [item, ...bucket];
    setBucket(newBucket);
  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    let updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    const updatedBucket = bucket.filter((item) => item.id !== id);
    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    // Map through the list of items, update the matching item
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;
