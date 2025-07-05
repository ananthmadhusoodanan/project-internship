using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Equipment
    {
        [Key]
        public int EquipmentId { get; set; }

        public required string EquipmentNumber { get; set; }
        public required string DeviceType { get; set; }
        public required string ModelNumber { get; set; }
        public required string LotNo { get; set; }
        public required string PurchaseDate { get; set; }
        public required string AmortizationDate { get; set; }
        public required string Status { get; set; }
        public required string PurchasePrice { get; set; }
        public required string Date { get; set; }
        public required string Type { get; set; }
        public required string ProductName { get; set; }
        public required string PackagePartNumber1 { get; set; }
        public required string LotNo1 { get; set; }
        public required string PackagePartNumber2 { get; set; }
        public required string LotNo2 { get; set; }
        public required string Remarks { get; set; }
    }
}
