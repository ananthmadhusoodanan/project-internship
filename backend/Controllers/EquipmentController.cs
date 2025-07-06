using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EquipmentController : ControllerBase
    {
        private readonly TIMSContext _context;

        public EquipmentController(TIMSContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Equipments.ToList());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Equipment equipment)
        {
            _context.Equipments.Add(equipment);
            _context.SaveChanges();
            return Ok(equipment);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Equipment updatedEquipment)
        {
            var equipment = _context.Equipments.FirstOrDefault(e => e.Id == id);
            if (equipment == null) return NotFound();

            equipment.StorageLocation = updatedEquipment.StorageLocation;
            equipment.EquipmentManagementNumber = updatedEquipment.EquipmentManagementNumber;
            equipment.DeviceType = updatedEquipment.DeviceType;
            equipment.ModelNumber = updatedEquipment.ModelNumber;
            equipment.LotNumber = updatedEquipment.LotNumber;
            equipment.PurchaseDate = updatedEquipment.PurchaseDate;
            equipment.PlannedAmortizationDate = updatedEquipment.PlannedAmortizationDate;
            equipment.Status = updatedEquipment.Status;
            equipment.AssetClassification = updatedEquipment.AssetClassification;
            equipment.Code1 = updatedEquipment.Code1;
            equipment.Code2 = updatedEquipment.Code2;
            equipment.Code3 = updatedEquipment.Code3;

            _context.SaveChanges();
            return Ok(equipment);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var equipment = _context.Equipments.FirstOrDefault(e => e.Id == id);
            if (equipment == null) return NotFound();

            _context.Equipments.Remove(equipment);
            _context.SaveChanges();
            return Ok();
        }
    }
}
