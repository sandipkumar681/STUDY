class quicksort {
    static void QUICKSORT(int A[], int p, int r) {
        if (p < r) {
            int q = PARTITION(A, p, r);
            QUICKSORT(A, p, q - 1);
            QUICKSORT(A, q + 1, r);
        }
    }

    static int PARTITION(int A[], int p, int r) {
        int x = A[r];
        int i = p - 1;
        for (int j = p; j < r; j++) {
            if (A[j] <= x) {
                i = i + 1;
                int temp1 = A[i];
                A[i] = A[j];
                A[j] = temp1;
            }
        }
        int temp2 = A[i + 1];
        A[i + 1] = A[r];
        A[r] = temp2;
        return i + 1;
    }

    public static void main(String args[]) {
        int arr[] = { 3, 4, 1, 2, 54, 325, 543, 2323, 3243, 523, 5325, 23532, 353, 357, 842 };
        QUICKSORT(arr, 0, arr.length - 1);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}