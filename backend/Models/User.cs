using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string Authority { get; set; }
    }
}
