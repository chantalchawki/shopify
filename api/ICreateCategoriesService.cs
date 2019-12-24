using Shopify.Models;
using System.ServiceModel;


namespace Shopify.api
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ICreateCategoriesService" in both code and config file together.
    [ServiceContract]
    public interface ICreateCategoriesService
    {
        [OperationContract(IsOneWay = true)]
        void Create(Category category);
    }
}
