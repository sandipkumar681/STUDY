class binarySearch {
    static int work(int arr[], int target, int low, int mid, int high) {
        if (target == arr[low]) {
            return low;
        } else if (target == arr[high]) {
            return high;
        } else if (target == arr[mid]) {
            return mid;
        } else {
            if (target > arr[mid]) {
                low = mid + 1;
                mid = (low + high) / 2;
                return work(arr, target, low, mid, high);
            } else {
                high = mid;
                mid = (low + high) / 2;
                return work(arr, target, low, mid, high);
            }
        }
    }

    public static void main(String args[]) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 124, 523, 5235, 6323 };
        int target = 124;
        int low = 0;
        int mid = arr.length / 2;
        int high = arr.length - 1;
        int index=work(arr, target, low, mid, high);
        System.out.println(index);
    }
}