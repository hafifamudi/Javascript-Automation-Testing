test('dua tambah dua adalah empat', () => {
    expect(2+2).toBe(4);
})


//contoh menggunakan describe untuk melakukan grouping terhadap test nya

describe("pengujian oleh aritmatika", () => {
    test("#1 dua tambah dua adalah empat", () => {
         expect(2+2).toBe(4);
    });
  
    test("#2 dua kali tiga adalah enam", () => {
         expect(2*3).toBe(6);
    });
 });