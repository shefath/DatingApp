using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            _repo = repo;
        }

        [HttpPost('register')]
        public async Task<IActionResult> Register(UserToRegisterDto userToRegister){
            //ToDo: validations later

            userToRegister.Username = userToRegister.Username.ToLower();
            if(await _repo.UserExists(userToRegister.Username))
                return BadRequest("User name already exists");

            var userToCreate = new User
            {
                Username = userToRegister.Username
            };
                
            var createdUser = await _repo.Register(userToCreate,userToRegister.Password);

            return StatusCode(201);
        }
    }
}