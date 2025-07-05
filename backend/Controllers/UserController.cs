using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    private readonly TIMSContext _context;

    public UserController(TIMSContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetUsers()
    {
        var users = _context.Users.ToList();
        return Ok(users);
    }

    [HttpPost]
    public IActionResult AddUser([FromBody] User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateUser(int id, [FromBody] User updated)
    {
        var user = _context.Users.Find(id);
        if (user == null) return NotFound();

        user.Username = updated.Username;
        user.Password = updated.Password;
        user.Authority = updated.Authority;
        _context.SaveChanges();

        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id)
    {
        var user = _context.Users.Find(id);
        if (user == null) return NotFound();

        _context.Users.Remove(user);
        _context.SaveChanges();
        return Ok();
    }
}
