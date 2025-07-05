using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EquipmentController : ControllerBase
    {
        private readonly TIMSContext _context;

        public EquipmentController(TIMSContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEquipment()
        {
            var equipment = await _context.Equipments.ToListAsync();
            return Ok(equipment);
        }

        [HttpPost]
        public async Task<IActionResult> AddEquipment([FromBody] Equipment equipment)
        {
            _context.Equipments.Add(equipment);
            await _context.SaveChangesAsync();
            return Ok(equipment);
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Equipment updatedEquipment)
        {
            var equipment = _context.Equipments.Find(id);
            if (equipment == null) return NotFound();

            // Update fields
            _context.Entry(equipment).CurrentValues.SetValues(updatedEquipment);
            _context.SaveChanges();
            return Ok(equipment);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var equipment = _context.Equipments.Find(id);
            if (equipment == null) return NotFound();

            _context.Equipments.Remove(equipment);
            _context.SaveChanges();
            return Ok();
        }



        [HttpGet("export")]
        public IActionResult ExportCSV()
        {
            var equipments = _context.Equipments.ToList();

            var csv = "EquipmentNumber,DeviceType,ModelNumber,Status\n";
            foreach (var eq in equipments)
            {
                csv += $"{eq.EquipmentNumber},{eq.DeviceType},{eq.ModelNumber},{eq.Status}\n";
            }

            var bytes = System.Text.Encoding.UTF8.GetBytes(csv);
            return File(bytes, "text/csv", "equipment.csv");
        }
    }
}
