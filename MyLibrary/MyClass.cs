using System;
using System.Threading.Tasks;

namespace MyLibrary
{
  public class MyClass
  {

    public async Task<object> MyMethod(dynamic payload)
    {
      int value = (int)payload;
      return value + 1;
    }

  }
}
