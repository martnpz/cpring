<script lang="ts">

  let isOpen = false;
  let title = "";
  let image = "";
  let body = "";

  function openModal() {
    isOpen = true;
  }

  function closeModal() {
    isOpen = false;
  }

async function handleSubmit() {
    const formData = {
      title,
      body,
      image
    };

    const response = await fetch('/api/create-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

if (response.ok) {
		const responseData = await response.json();
        console.log('Response from server:', responseData);
    } else {
        console.error('Error creating post');
    }
}

  
</script>

{#if isOpen}
  <div class="modal">
    <div class="modal-content">
      <button class="close" on:click={closeModal}>&times;</button>
      <h2>Create a New Post</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <label>
          Title:
          <input type="text" bind:value={title} />
        </label>
        <label>
          Image URL:
          <input type="text" bind:value={image} />
        </label>
        <label>
          Body:
          <textarea bind:value={body}></textarea>
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  </div>
{/if}

<button on:click={openModal}>Create New Post</button>

<style>
  .modal {
    color: black;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: rgb(37, 58, 84);
  width: 60%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>