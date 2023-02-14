function Bsearch(arr,l,h,k){
      if (l < h){
          var mid = (h +l)/2;
          if (arr[mid] == k){
            return mid;
          }
          if (arr[mid] > k)
          {
            return Bsearch(arr, l, mid-1, k);
          }
          else{
            return Bsearch(arr, mid+1, h, k);
          }
          }
      return -1;
  }