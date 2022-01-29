<template>
    <div class="flex flex-col w-full min-h-screen mx-auto">
        <TheHeader />
        <!-- Page Content -->
        <main id="page-content" class="flex flex-col flex-auto max-w-full">
            <!-- Page Section -->
            <div class="container p-4 mx-auto xl:max-w-7xl lg:p-8">
                <!--

      ADD YOUR MAIN CONTENT BELOW

                -->

                <!-- Placeholder -->
                <slot/>

                <!--
      
      ADD YOUR MAIN CONTENT ABOVE
            
                -->
            </div>
            <!-- END Page Section -->
        </main>
        <!-- END Page Content -->
        <TheFooter />
    </div>
</template>
