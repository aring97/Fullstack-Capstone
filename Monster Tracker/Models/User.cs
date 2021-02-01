using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tabloid_Fullstack.Models
{
    public class User
    {
        int Id { get; set; }
        string UserName { get; set; }
        string FirebaseId { get; set; }
        string Email { get; set; }
    }
}
