using System.Linq;
using ToDoList.Services;
using Xunit;

namespace ToDoList.Tests
{
    public class ToDoServiceTests 
    {

        ToDoService sut = new ();        

        [Fact]
        public void VerifyAdd()
        {
            // act
            sut.Add(new () {Id = "1234", Priority = 1, Description = "test"  });
            var item = sut.GetAll().FirstOrDefault();

            // assert
            Assert.NotNull(item);
            Assert.Equal("1234", item.Id);
            Assert.Equal(1, item.Priority);
            Assert.Equal("test", item.Description);
            Assert.Equal(false, item.IsCompleted);
            Assert.Equal(false, item.IsDeleted);

        }

        [Fact]
        public void VerifyUpdate()
        {
            // arrange
            sut.Add(new () {Id = "1234", Priority = 1, Description = "test"  });

            // act
            sut.Update(new () {Id = "1234", Priority = 1, Description = "test", IsCompleted = true });
            var item = sut.GetAll().FirstOrDefault();

            // assert
            Assert.NotNull(item);
            Assert.Equal("1234", item.Id);
            Assert.Equal(1, item.Priority);
            Assert.Equal("test", item.Description);
            Assert.Equal(true, item.IsCompleted);
            Assert.Equal(false, item.IsDeleted);

        }

        [Fact]
        public void VerifyDelete()
        {
            // arrange
            sut.Add(new () {Id = "1234", Priority = 1, Description = "test"  });

            // act
            sut.Delete(new () {Id = "1234", Priority = 1, Description = "test", IsCompleted = true });
            var item = sut.GetAll().FirstOrDefault();

            // assert
            Assert.Null(item);

        }

    }
}